import { PlayerContract } from "./PlayerContract";
export interface GameInteractor {
    addPlayer(player: PlayerContract): void;
    hasPlayer(playerToFind: PlayerContract): boolean;
}
