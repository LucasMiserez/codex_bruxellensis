export type RootRules = Rules[];

export interface Rules {
  Title: string;
  Page: number;
  Art: RulesArt[];
}

export interface RulesArt {
  ArtTitle?: string;
  content: string;
}

export interface RootCategorieen {
  categorieen: Categorieen[];
}

export interface Categorieen {
  categorie: string;
  liederen: Liederen[];
}

export interface Liederen {
  kring?: string;
  pagina: number;
  content: string;
  songs?: Song[];
  titel?: string;
  extra?: string;
}

export interface Song {
  titel: string;
  pagina: number;
  extra: string;
  content: string;
}
