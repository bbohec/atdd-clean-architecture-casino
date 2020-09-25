import { GameContract } from "./Game";
export interface PlayerContract {
    inform(): string;
    isPartOfGame(game: GameContract): boolean;
    joinGame(gameName: string): void;
    money: number;
}