const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

console.log(__dirname);
app.use('/static', express.static('public'));
app.use(express.static(path.join(__dirname, "dist")))

app.get('/', (req, res) => {
    fs.readFile('dist/index.html', 'utf8', (err, html) => {
        if (err) { console.error(err); }
        res.send(html);
    });
});

console.log('App is online on http://localhost:8080'); app.listen(8080);