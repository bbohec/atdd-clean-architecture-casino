import { GameContract } from "./Game";

export interface GameRepositoryInteractor {
    retrieveGameByName(gameName: string): GameContract;
}
