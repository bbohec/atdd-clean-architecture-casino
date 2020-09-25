import { GameInteractor } from '../../core/port/GameInteractor';
import { PlayerContract } from '../../core/port/PlayerContract';

export class fakeGameInteractor implements GameInteractor {
    addPlayer(player: PlayerContract): void {
        this.players.push(player)
    }
    hasPlayer(playerToFind: PlayerContract): boolean {
        return this.players.some(player=> player === playerToFind)
    }
    private players = new Array<PlayerContract>()
}