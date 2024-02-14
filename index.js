import express from "express";
const app = express();
// const port = 3000;

app.get("/", (req, res) => res.send({ name: "kesdwn" }));

app.listen(3000, () => console.log(`http://localhost:3000`));
