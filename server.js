const express = require("express")
const app = express()
const PORT = 3100

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(PORT, () => {
    console.log(`app listen on htpp://localhost${PORT}`)
})