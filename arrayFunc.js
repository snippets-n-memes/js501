var Game = require("./game");

async function main() {
    let game = new Game()
    await game.shuffle()

    let hand = await game.draw(52)
    let codes = hand.cards.map(card => card.code)
    await game.addToPile("LorgePile", codes)

    return await game.getPile("LorgePile")
}

main().then( pile => {
    console.log(pile.cards[0])
    values = pile.cards.map(card => card.value);
    console.log(values)
    let total = values.reduce(
        (previous, current) => {
            let value = current
            switch(value) {
                case "JACK":
                    value = 11;
                    break;
                case "QUEEN":
                    value = 12;
                    break;
                case "KING":
                    value = 13;
                    break;
                case "ACE":
                    value = 14;
                    break;     
            }
            return previous += parseInt(value);
        } 
        ,0
    )

    console.log(total)
})