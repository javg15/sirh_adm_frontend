import { TestBed } from '@angular/core/testing';

import { UsuariosSistemasService } from './usuariossistemas.service';

describe('UsuariossistemasService', () => {
  let service: UsuariosSistemasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosSistemasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
