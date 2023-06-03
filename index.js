import express from "express";

const app = express();
const PORT = 5000;

function handleListening() {
    console.log(`Listening on: http://localhost:${PORT}`);
}

function handleHome(req, res) {
    res.send("fuc");
}

app.get("/", handleHome);

app.listen(PORT, handleListening);
