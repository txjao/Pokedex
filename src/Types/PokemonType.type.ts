export interface PokemonType {
    name: string;
    number: number;
    type: string;
    hp: number;
    cp: number;
    height: number;
    resistance: Array<string>;
    weaknesses: Array<string>;
    frontDefault: string;
}