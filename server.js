const express = require("express");
const res = require("express/lib/response");

const app = express();


app.set("view engine", "ejs")
app.use(express.urlencoded({extended : false}))
app.listen(process.env.PORT || 5000)


const Urlz = []

app.get("/", (req,res) => {
    res.render("main")
    console.log("User is Online")
})

app.get("/shortUrl", (req,res) => {
    for (let i = 0; i <= Urlz.length; i++){
        res.redirect(Urlz[i].urlFull)
    }
})


app.post("/shortUrl", (req,res) => {
    const newUrlz = {
        urlID : Urlz.length + 1,
        urlFull : req.body.fullUrl,
        urlShort : "Ftta131c"
    }
    Urlz.push(newUrlz)
    res.render("last",{newUrlz})
})

