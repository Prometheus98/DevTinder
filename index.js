const express = require("express");

const app = express();

app.use("/test", (req, res) => {
    res.send("Mic Testing.....");
})

app.use("/hello", (req, res) => {
    res.send("Hello World.....");
})

app.use("/", (req, res) => {
    res.send("Server running at port 7777.....");
})


app.listen(7777, () => {
    console.log("server listening at port 7777....");
})