const { response } = require("express");
const express = require("express");

const app = express();
const PORT = 4000;

app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});

function hello (req, res) {
    res.send('hello world')
}
const hello2 = (req, res) => {
    res.send('Hello World! 2');
}
const hello3 = (req, res) => {
    res.send('ExpressJS Rulesz!!');
}
const hello4 = (req, res) => {
    res.send(package.json);
}
app.get('/', hello);
app.get('/2', hello2);
app.get('/3', hello3);
app.get('/4', hello4);