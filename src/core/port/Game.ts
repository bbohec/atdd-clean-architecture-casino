import { PlayerContract } from "./Player";
export interface GameContract {
    hasPlayer(player: PlayerContract): boolean;
    name: string;
    addPlayer(player: PlayerContract): void;
    minimumBet: number;
}
export interface GameRepositoryInteractor {
    retrieveGameByName(gameName: string): GameContract;
}
export interface GameInteractor {
    addPlayer(player: PlayerContract): void;
    hasPlayer(playerToFind: PlayerContract): boolean;
}

export const WELCOME_GAME = (gameName: string) => `Welcome to the game ${gameName}`;
export const ERROR_NOT_ENOUGH_MONEY = "You don't have enough money";