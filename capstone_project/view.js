import express from "express";

const app = express();
app.use(express.static("public"));
app.get("/",(req,res) => {
    res.render("home.ejs");
});

app.listen(3000,() => {});