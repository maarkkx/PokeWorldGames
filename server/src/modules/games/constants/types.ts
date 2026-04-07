//Pokemon
export type Pokemon = {
  id: number;
  name: string;
  urlImage: string | null;
  hp: number;
  atk: number;
  def: number;
  spAtk: number;
  spDef: number;
  speed: number;
  types: any[];
}

//status de la partida
export type GameStatus = 'ACTIVE' | 'WON' | 'LOST' | 'ABANDONED';