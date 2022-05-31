var fs = require("fs"),
    pile = require("./makePile")

// pile().then(cards=>console.log(cards))
pile().then(cards=>
    fs.writeFileSync("data.json", JSON.stringify(cards)
    )
)
