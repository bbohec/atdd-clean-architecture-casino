import { GameContract } from "../../core/port/Game";
import { GameRepositoryInteractor } from "../../core/port/GameRepositoryInteractor";

export class FakeGameRepository implements GameRepositoryInteractor {
    constructor(games: Array<GameContract>) {
        this.gameRepository = games
    }
    retrieveGameByName(gameName: string): GameContract {
        const gamesWithName = this.gameRepository.filter(game => game.name === gameName)
        if (gamesWithName.length === 0) throw "No game found"
        else if (gamesWithName.length === 1) return gamesWithName[0]
        else throw "multiple games with same name"
    }
    private gameRepository: Array<GameContract>
}