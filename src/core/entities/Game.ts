import { PlayerContract } from "../port/PlayerContract";
import { GameContract } from "../port/Game";
import { GameInteractor } from "../port/GameInteractor";

export class Game implements GameContract {
    constructor(name: string, minimumBet: number,interactWithGame:GameInteractor) {
        this.name = name;
        this.minimumBet = minimumBet;
        this.interactWithGame = interactWithGame
    }
    hasPlayer(playerToFind: PlayerContract): boolean {
        return this.interactWithGame.hasPlayer(playerToFind)
    }
    name: string;
    addPlayer(player: PlayerContract):void {
        this.interactWithGame.addPlayer(player)
    }
    minimumBet: number;
    interactWithGame: GameInteractor
}

