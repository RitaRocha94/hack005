const express = require("express")

const {
    findDonation,
    insertDonation,
    deleteDonation
} = require("./db")
const app = express()
const PORT = 3501

app.use(express.json())


app.get("/api/donations/:location", async (req, res) => {
    try {
        res.status(200).json({
        Donations: await findDonation(location)
    })
    } catch (err) {
    res.status(500).send("Erro a ler as mensagens")
    console.log(err)
    }
})

app.get("/api/donations/", async (req, res) => {
    try {
        res.status(200).json({
        Donations: await findDonation(location)
    })
    } catch (err) {
    res.status(500).send("Erro a ler as mensagens")
    console.log(err)
    }
})


app.post("/api/donations/", async (req, res) => {
    try {
        const values = req.body
        const id = await insertDonation( values )
        res.status(201).json({id: id})

    } catch(err) {
        console.log(err)
    }
})


app.delete("/api/donations/:id", async (req, res) => {
    try {
        const deleted = await deleteDonation(req.params.id)
        console.log('deleted', deleted)
        if (deleted) {
            res.status(200).json()
        } else {
            res.sendStatus(404)
            // res.status(404).send()
        }
    } catch (err) {
        console.log(err)
        res.sendStatus(404)
    }
})


app.listen(PORT,() => console.log(`À escuta em ${PORT}`))