const express = require('express');
const url = require('url');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

const filePath =  path.join(__dirname, './index.html' );

app.render("/", (err, html ) => {
    fs.readFile()
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});