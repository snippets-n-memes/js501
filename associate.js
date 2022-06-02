var Game = require("./game");

async function main() {
    let game = new Game()
    await game.shuffle()

    let hand = await game.draw(5)
    let codes = hand.cards.map(card => card.code)
    await game.addToPile("LorgePile", codes)

    return await game.getPile("LorgePile")
}

main().then( pile => {
    console.log(pile.cards)
    var suits = ["HEARTS", "SPADES", "CLUBS", "DIAMONDS"]
    var totals={};
    suits.forEach(suit=>totals[suit]=0)
    console.log(totals)
    pile.cards.forEach((e)=>{
      totals[e.suit]++
    })
    console.log(totals)
})