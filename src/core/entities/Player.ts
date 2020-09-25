import { ERROR_NOT_ENOUGH_MONEY, GameContract, GameRepositoryInteractor, WELCOME_GAME } from "../port/Game";
import { PlayerContract } from "../port/Player";
export class Player implements PlayerContract {
    constructor(money: number, interactWithGameRepository: GameRepositoryInteractor) {
        this.money = money;
        this.interactWithGameRepository = interactWithGameRepository
    }
    isPartOfGame(game: GameContract): boolean {
        return game.hasPlayer(this)
    }
    joinGame(gameName: string): void {
        const game: GameContract = this.interactWithGameRepository.retrieveGameByName(gameName)
        if (this.money >= game.minimumBet) {
            game.addPlayer(this)
            this.playerInformation = WELCOME_GAME(game.name)
        } else this.playerInformation = ERROR_NOT_ENOUGH_MONEY
    }
    inform(): string {
        return this.playerInformation
    }
    private playerInformation: string = "";
    money: number;
    interactWithGameRepository: GameRepositoryInteractor
}

