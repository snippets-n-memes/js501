var Game = require("./game.js")

var game = new Game();

// game.shuffle().then(()=>console.log(game.deck))
// game.shuffle().then(()=>game.draw(2).then(cards => console.log(cards)))

game.shuffle().then(() => {
    game.draw(2)
        .then(cards => {
            let codes = cards.cards.map(card => card.code)
            game.addToPile("SmolPile", codes)
                .then(()=> {
                    game.getPile("SmolPile")
                        .then(pile=>console.log(pile.cards))
                })
        })
    })

