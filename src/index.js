const express = require('express');
const cors = require('cors');
const { add } = require("./arithmetica");
const app = express();
app.use(cors());
const port = 3000;
app.get('/', (req, res) => {
    res.send('Arithmetic service - Last updated 2/17/2024 3:21PM');
});

app.get('/add/:n/:m', (req, res) => {
    let n = Number(req.params.n);
    let m = Number(req.params.m);
    let sum = add(n, m);
        res.json(sum);
    //res.json(Number(req.params.n) + Number(req.params.m));
});
app.listen(port);