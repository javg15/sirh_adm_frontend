// Automatically generated. Don't change this file manually.

import Archivos, { ArchivosInitializer, } from './archivos';
import Catzonageografica, { CatzonageograficaInitializer } from './catzonageografica';
import Catsistemas, { CatsistemasInitializer } from './catsistemas';
import UsuariosZonas, { UsuariosZonasInitializer } from './usuarios_zonas';
import UsuariosSistemas, { UsuariosSistemasInitializer } from './usuarios_sistemas';
import Log, { LogInitializer, LogId } from './log';
import Modulos, { ModulosInitializer, ModulosId } from './modulos';
import Permgrupos, { PermgruposInitializer, PermgruposId } from './permgrupos';
import Permgruposmodulos, { PermgruposmodulosInitializer, PermgruposmodulosId } from './permgruposmodulos';
import Permusuariosmodulos, { PermusuariosmodulosInitializer, PermusuariosmodulosId } from './permusuariosmodulos';
import Personal, { PersonalInitializer, } from './personal';
import Searchcampos, { SearchcamposInitializer, SearchcamposId } from './searchcampos';
import Searchoperador, { SearchoperadorInitializer, SearchoperadorId } from './searchoperador';
import Usuarios, { UsuariosInitializer, UsuariosId } from './usuarios';

type Model =
  | Archivos
  | Catzonageografica
  | Catsistemas
  | UsuariosZonas
  | UsuariosSistemas
  | Log
  | Modulos
  | Permgrupos
  | Permgruposmodulos
  | Permusuariosmodulos
  | Personal
  | Searchcampos
  | Searchoperador
  | Usuarios

interface ModelTypeMap {
  'archivos': Archivos;
  'catzonageografica': Catzonageografica;
  'catsistemas': Catsistemas;
  'usuarioszonas': UsuariosZonas;
  'usuariossistemas': UsuariosSistemas;
  'log': Log;
  'modulos': Modulos;
  'permgrupos': Permgrupos;
  'permgruposmodulos': Permgruposmodulos;
  'permusuariosmodulos': Permusuariosmodulos;
  'personal': Personal;
  'searchcampos': Searchcampos;
  'searchoperador': Searchoperador;
  'usuarios': Usuarios;
}

type ModelId =
  | LogId
  | ModulosId
  | PermgruposId
  | PermgruposmodulosId
  | PermusuariosmodulosId
  | SearchcamposId
  | SearchoperadorId
  | UsuariosId

interface ModelIdTypeMap {
  'log': LogId;
  'modulos': ModulosId;
  'permgrupos': PermgruposId;
  'permgruposmodulos': PermgruposmodulosId;
  'permusuariosmodulos': PermusuariosmodulosId;
  'searchcampos': SearchcamposId;
  'searchoperador': SearchoperadorId;
  'usuarios': UsuariosId;
}

type Initializer =
  | ArchivosInitializer
  | CatzonageograficaInitializer
  | CatsistemasInitializer
  | UsuariosZonasInitializer
  | UsuariosSistemasInitializer
  | LogInitializer
  | ModulosInitializer
  | PermgruposInitializer
  | PermgruposmodulosInitializer
  | PermusuariosmodulosInitializer
  | PersonalInitializer
  | SearchcamposInitializer
  | SearchoperadorInitializer
  | UsuariosInitializer

interface InitializerTypeMap {
  'archivos': ArchivosInitializer;
  'catzonageografica': CatzonageograficaInitializer;
  'catsistemas': CatsistemasInitializer;
  'usuarioszonas': UsuariosZonasInitializer;
  'usuariossistemas': UsuariosSistemasInitializer;
  'log': LogInitializer;
  'modulos': ModulosInitializer;
  'permgrupos': PermgruposInitializer;
  'permgruposmodulos': PermgruposmodulosInitializer;
  'permusuariosmodulos': PermusuariosmodulosInitializer;
  'personal': PersonalInitializer;
  'searchcampos': SearchcamposInitializer;
  'searchoperador': SearchoperadorInitializer;
  'usuarios': UsuariosInitializer;
}

export {
  Archivos, ArchivosInitializer,
  Catzonageografica, CatzonageograficaInitializer,
  Catsistemas, CatsistemasInitializer,
  UsuariosZonas, UsuariosZonasInitializer,
  UsuariosSistemas, UsuariosSistemasInitializer,
  Log, LogInitializer, LogId,
  Modulos, ModulosInitializer, ModulosId,
  Permgrupos, PermgruposInitializer, PermgruposId,
  Permgruposmodulos, PermgruposmodulosInitializer, PermgruposmodulosId,
  Permusuariosmodulos, PermusuariosmodulosInitializer, PermusuariosmodulosId,
  Personal, PersonalInitializer,
  Searchcampos, SearchcamposInitializer, SearchcamposId,
  Searchoperador, SearchoperadorInitializer, SearchoperadorId,
  Usuarios, UsuariosInitializer, UsuariosId,

  Model,
  ModelTypeMap,
  ModelId,
  ModelIdTypeMap,
  Initializer,
  InitializerTypeMap
};
