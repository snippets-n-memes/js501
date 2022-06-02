class Game {
    constructor() {
        this.deck = {}
        this.piles = {}
    }

    async draw(numCards) {
        return await fetch(`https://deckofcardsapi.com/api/deck/${this.deck.deck_id}/draw/?count=${numCards}`)
            .then(response => response.json())
    }

    async shuffle() {
        this.deck = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
            .then(response => response.json())
    }

    async getPile(name) {
        return await fetch(`https://deckofcardsapi.com/api/deck/${this.deck.deck_id}/pile/${name}/list/`)
            .then(response => response.json())
            .then(data => data.piles[name])
    }

    async reshuffle(remaining) {
        fetch(`https://deckofcardsapi.com/api/deck/${this.deck.deck_id}/shuffle/?remaining=${remaining}`)
    }

    async addToPile(name, cards) {
        fetch (
            `https://deckofcardsapi.com/api/deck/${this.deck.deck_id}/pile/${name}/add/?cards=${cards.join(',')}`
        )
    }
}

module.exports = Game;
