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
