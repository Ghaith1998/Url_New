const express = require("express");

const app = express();


app.set("view engine", "ejs")
app.use(express.urlencoded({extended : true}))
app.listen(process.env.PORT || 5000)

app.get("/", (req,res) => {
    res.render("main")
    console.log("User is Online")
})

app.post("/shortUrl", (req,res) => {
    res.redirect(req.body.fullUrl)
})

