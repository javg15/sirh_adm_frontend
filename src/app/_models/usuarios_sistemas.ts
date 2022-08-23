// Automatically generated. Don't change this file manually.

export type UsuariosSistemasId = number & { __flavor?: 'usuarios_sistemas' };

export default interface UsuariosSistemas {
  /** Primary key. Index: modulos_zonas_pkey */
  id: UsuariosSistemasId;

  id_usuarios: number;

  id_permgrupos: number;

  sistema: string | null;

  state: string | null;

  created_at: Date | null;

  updated_at: Date | null;

  id_usuarios_r: number | null;

  record_catzonasgeograficas: string[] | null;
}

export interface UsuariosSistemasInitializer {
  /**
   * Default value: nextval('modulos_zonas_id_seq'::regclass)
   * Primary key. Index: modulos_zonas_pkey
   */
  id?: UsuariosSistemasId;

  /** Default value: 0 */
  id_usuarios?: number;

  /** Default value: 0 */
  id_permgrupos?: number;

  sistema?: string;

  state?: string;

  created_at?: Date;

  updated_at?: Date;

  id_usuarios_r?: number;

  record_catzonasgeograficas?:string[];
}
