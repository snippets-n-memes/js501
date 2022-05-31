var Game = require("./game");

async function main() {
    let game = new Game()
    await game.shuffle()

    let hand = await game.draw(52)
    let codes = hand.cards.map(card => card.code)
    await game.addToPile("LorgePile", codes)

    return await game.getPile("LorgePile")
}

module.exports = main;