async function getDeck() {
    return await fetch("https://deckofcardsapi.com/api/deck/6s8kv6r9ohhp")
        .then(response => response.json())
}

async function drawTwo(deck_id) {
    return await fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=2`)
        .then(response => response.json())
}

getDeck()
    .then(
        deck => drawTwo(deck.deck_id)
            .then(response=>console.log(response))
    )