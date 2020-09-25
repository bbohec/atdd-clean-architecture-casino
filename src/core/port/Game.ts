import { PlayerContract } from "./PlayerContract";
export interface GameContract {
    hasPlayer(player: PlayerContract): boolean;
    name: string;
    addPlayer(player: PlayerContract):void;
    minimumBet: number;
}

export const WELCOME_GAME=(gameName:string)  => `Welcome to the game ${gameName}`;
export const ERROR_NOT_ENOUGH_MONEY = "You don't have enough money";