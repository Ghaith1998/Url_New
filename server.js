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

app.post("/shortUrl", (req,res) => {
    const newUrlz = {
        urlID : Urlz.length + 1,
        urlFull : req.body.fullUrl,
        urlShort : "Ftta131c"
    }
    Urlz.push(newUrlz)
    res.send(`
    <table>
    <thead>
        <tr>
            <th>Full Url</th>
            <th>Short Url</th>
        </tr>
    </thead>
    <tbody>
    <tr>
    <td id="fl"><a href="${newUrlz.urlFull}">${newUrlz.urlFull}</a></td>
    <td id="sh"><a href="${newUrlz.urlFull}">${newUrlz.urlShort}</a></td>
</tr>
    </tbody>
</table>
    `)

})

