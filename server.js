const express = require("express");
const res = require("express/lib/response");

const uuid = require("uuid")
const app = express();


app.set("view engine", "ejs")
app.use(express.urlencoded({extended : false}))
app.listen(process.env.PORT || 5000)

const Urlz = []

// Die erste Seite
app.get("/", (req,res) => {
    res.render("main")
    console.log("User is Online")
})

// Redirect den Url 
app.get("/shortUrl:id", (req,res) => {             
    for(let i = 0; i <= Urlz.length; i++){
        if(Urlz[i].urlShort === req.params.id){
            res.redirect(Urlz[i].urlFull)
        }
    }
})        

// Check your URls
app.get("/shortUrl", (req, res) => {
    if (Urlz.length === 0) {
        res.send(`<h1>You dont have any Urls yet </h1>`)
    }else {res.render("last",{Urlz})}
})


// mehrere URLs müssen ausgeprintet werden
app.post("/shortUrl", (req,res) => {
    const newUrlz = {
        urlID : Urlz.length + 1,
        urlFull : req.body.fullUrl,
        urlShort : uuid.v4()
    }
    if (!req.body.fullUrl) {
        res.status(400).send(`<h1>Pleasse Enter a real URL</h1>`)
    }else {
        Urlz.push(newUrlz)
        res.render("last",{Urlz})
    }
})

