import search from './API/search.js';
import express from 'express'

const app = express();

app.get('/search/:product', function(req, res) {
    search(req.params.product, 'flipkart.com').then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    })
});

app.listen(3000).on('listening', () => {
    console.log('Server started at port 3000');
});

