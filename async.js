var Game = require("./game");

async function main() {
    let game = new Game()
    await game.shuffle()

    let hand = await game.draw(5)
    let codes = hand.cards.map(card => card.code)
    await game.addToPile("SmolPile", codes)

    let cards = await game.getPile("SmolPile")
    console.log(cards)
}

main();