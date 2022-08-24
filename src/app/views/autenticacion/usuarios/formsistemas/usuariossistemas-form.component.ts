import { Component, ElementRef, Input, OnInit, ViewChild, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from '../../../../_services/token-storage.service';
import { UsuariosService } from '../services/usuarios.service';

import { ModalDirective } from 'ngx-bootstrap/modal';
import { UsuariosZonas,UsuariosSistemas,Catzonageografica, Permgrupos, Catsistemas } from '../../../../_models';
import { ValidationSummaryComponent } from '../../../_shared/validation/validation-summary.component';
import { actionsButtonSave, titulosModal } from '../../../../../environments/environment';
import { Observable } from 'rxjs';
import { IsLoadingService } from '../../../../_services/is-loading/is-loading.service';

import { UsuariosSistemasService } from '../services/usuariossistemas.service';
import { UsuarioszonasService } from '../../../autenticacion/usuarioszonas/services/usuarioszonas.service';
import { CatzonageograficaService } from '../../../catalogos/catzonageografica/services/catzonageografica.service';
import { CatsistemasService } from '../../../catalogos/catsistemas/services/catsistemas.service';
import { PermgruposService } from '../../../autenticacion/permgrupos/services/permgrupos.service';


declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'app-usuariossistemas-form',
  templateUrl: './usuariossistemas-form.component.html',
  styleUrls: ['./usuariossistemas-form.component.css']
})

export class UsuariossistemasFormComponent implements OnInit, OnDestroy {
  userFormIsPending: Observable<boolean>; //Procesando información en el servidor

  @Input() dtOptions: DataTables.Settings = {};
  @Input() id: string; //idModal
  @Input() botonAccion: string; //texto del boton según acción
  @Output() redrawEvent = new EventEmitter<any>();

  nombreModulo = 'Usuariossistemas';

  actionForm: string; //acción que se ejecuta (nuevo, edición,etc)
  tituloForm: string;
  successModalTimeOut: null | ReturnType<typeof setTimeout> = null;
  

  private elementModal: any;

  @ViewChild('basicModalUsuariossistemas') basicModalUsuariossistemas: ModalDirective;
  @ViewChild('successModal') public successModal: ModalDirective;
  @ViewChild(ValidationSummaryComponent) validSummary: ValidationSummaryComponent;

  record: UsuariosSistemas;
  catzonageograficaCat:Catzonageografica[];
  catsistemasCat:Catsistemas[];
  permgruposCat:Permgrupos[];
  keywordSearch = 'full_name';
  isLoadingSearch: boolean;
  esinterina: boolean=false;
  editarSistema: boolean=false;

  //se usa en el html
  dropdownSettings = {
    singleSelection: false,
    text:"",
    selectAllText:'Todas',
    unSelectAllText:'Ninguna',
    enableSearchFilter: false,
    classes:"myclass custom-class"
  };

  optionsSelect: any={multiple: true, closeOnSelect: false, width: '300'};

  //recordJsonTipodoc1:any={UltimoGradodeEstudios:0,AreadeCarrera:0,Carrera:0,Estatus:0};

  constructor(
    private tokenStorage: TokenStorageService,
    private isLoadingService: IsLoadingService,
    private usuariosSvc: UsuariosService,
    private catzonageograficaSvc: CatzonageograficaService,
    private catsistemasSvc: CatsistemasService,
    private permgruposSvc: PermgruposService,
    private usuarioszonasSvc:UsuarioszonasService,
    private usuariossistemasService:UsuariosSistemasService,
    private el: ElementRef,
    private route: ActivatedRoute
  ) {
    this.elementModal = el.nativeElement;

    this.catsistemasSvc.getCatalogo().subscribe(resp => {
      this.catsistemasCat = resp;
    });
    this.permgruposSvc.getCatalogo().subscribe(resp => {
      this.permgruposCat = resp.filter(a=>a.icode!="SAD");
    });

    this.catzonageograficaSvc.getCatalogo().subscribe(resp => {
      this.catzonageograficaCat = resp;
    });
  }

  newRecord(idParent: number): UsuariosSistemas {
    return {
      id: 0, id_usuarios: idParent, id_permgrupos: 0, sistema:"",
      record_catzonasgeograficas:[],
      state: '', created_at: new Date(), updated_at: new Date(), id_usuarios_r: 0
    };
  }
  ngOnInit(): void {

    this.record = this.newRecord(0);

    let modal = this;

    // ensure id attribute exists
    if (!modal.id) {//idModal {
      console.error('modal must have an id');
      return;
    }
    // add self (this modal instance) to the modal service so it's accessible from controllers
    modal.usuariossistemasService.add(modal);

    //loading
    this.userFormIsPending = this.isLoadingService.isLoading$({ key: 'loading' });

    //quincena activa
    
  }

  // remove self from modal service when directive is destroyed
  ngOnDestroy(): void {
    this.usuariossistemasService.remove(this.id); //idModal
    this.elementModal.remove();
  }


  submitAction(admin) {

    if (this.actionForm.toUpperCase() !== "VER") {

      this.validSummary.resetErrorMessages(admin);
      

          //Solo se edita información, el archivo no se puede reemplazar, solo eliminar
          this.isLoadingService.add(
            this.usuariossistemasService.setRecord(this.record, this.actionForm).subscribe(async resp => {
              if (resp.hasOwnProperty('error')) {
                this.validSummary.generateErrorMessagesFromServer(resp.message);
              }
              else if (resp.message == "success") {
                this.record.id=resp.id;

                  this.successModal.show();
                  setTimeout(()=>{ this.successModal.hide(); this.close();}, 2000)
              }
          }), { key: 'loading' });
      
    }
  }

  onSelectSistema(sistema) {
    this.permgruposSvc.getCatalogoSegunSistema(sistema).subscribe(resp => {
      this.permgruposCat = resp.filter(a=>a.icode!="SAD");
    });
  }

  // open modal
  open(idItem: string, accion: string, idUsuario: number): void {
    this.actionForm = accion;
    this.botonAccion = actionsButtonSave[accion];
    this.tituloForm = "Sistemas permitidos - " + titulosModal[accion] + " registro";
   
    if (idItem == "0") {
      this.record = this.newRecord(idUsuario);
      this.editarSistema=true;
    } else {
      //obtener el registro
      this.editarSistema=false;
      this.usuariossistemasService.getRecord(idItem).subscribe(async resp => {
          this.record = resp;
          
          //obtener las zonas seleccionadas
          this.usuarioszonasSvc.getRecordUsuariosZonas(this.record.id_usuarios,this.record.sistema).subscribe(resp => {
            this.record.record_catzonasgeograficas = resp.map(rec=>rec.id.toString());
          });
      });
    }

    
    // console.log($('#modalTest').html()); poner el id a algun elemento para testear
    this.basicModalUsuariossistemas.show();
  }

  // close modal
  close(): void {
    this.basicModalUsuariossistemas.hide();
    if (this.actionForm.toUpperCase() != "VER") {
      this.redrawEvent.emit(null);
    }
  }

  continuarEditando(){
    if(this.successModalTimeOut) {
      clearTimeout(this.successModalTimeOut);
      this.successModal.hide();
    }
  }

  // log contenido de objeto en adminulario
  get diagnosticValidate() { return JSON.stringify(this.record); }

}
