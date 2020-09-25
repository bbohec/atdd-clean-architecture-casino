import 'mocha';
import chai = require("chai");
const expect = chai.expect;
import { ERROR_NOT_ENOUGH_MONEY, GameRepositoryInteractor, WELCOME_GAME } from '../../src/core/port/Game';
import { Player } from "../../src/core/entities/Player"
import { Game } from '../../src/core/entities/Game';
import { FakeGameRepository } from '../../src/adapters/secondary/fakeGameRepository';
import { fakeGameInteractor } from '../../src/adapters/secondary/fakeGameInteractor';
describe(`
Feature : Rejoindre un jeu
    As a player,
    In order to play a game,
    I want to join the game
`, () => {
    const gameNameRoulette = "gameNameRoulette"
    const gameNamePoker = "gameNamePoker"
    const scenarios = [
        { title: `Scenario: A player can join the game`, game: { name: gameNameRoulette, minimumBet: 1 }, playerMoney: 2, isPartOfGame: true, playerInformation: WELCOME_GAME(gameNameRoulette) },
        { title: `Scenario: A player can't join the game because he don't have enough money`, game: { name: gameNamePoker, minimumBet: 2 }, playerMoney: 1, isPartOfGame: false, playerInformation: ERROR_NOT_ENOUGH_MONEY }
    ]
    const gameRepository: GameRepositoryInteractor = new FakeGameRepository(scenarios.map(scenario => new Game(scenario.game.name, scenario.game.minimumBet, new fakeGameInteractor)))
    scenarios.forEach((scenario) => {
        describe(`Scenario: A player can join the game`, () => {
            const player = new Player(scenario.playerMoney, gameRepository)
            it(`Given a player with ${scenario.playerMoney}$`, () => {
                expect(player.money).is.equal(scenario.playerMoney)
            })
            it(`And a game ${scenario.game.name} with a minimum bet is ${scenario.game.minimumBet}$`, () => {
                expect(player.interactWithGameRepository.retrieveGameByName(scenario.game.name).minimumBet).is.equal(scenario.game.minimumBet)
            })
            it(`When the player want to join the game ${scenario.game.name}`, (done) => {
                player.joinGame(scenario.game.name)
                done()
            })
            it((scenario.isPartOfGame) ? "Then the player is part of game players" : "Then the player is not part of game players", () => {
                expect(player.isPartOfGame(player.interactWithGameRepository.retrieveGameByName(scenario.game.name))).is.equal(scenario.isPartOfGame)
            })
            it(`And the player is informed with the message ${scenario.playerInformation}`, () => {
                expect(player.inform()).is.equal(scenario.playerInformation)
            })
        })
    })
})
