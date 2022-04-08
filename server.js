function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!res.secure && req.get('x-forwarded-proto') !== 'https') {
        return res. redirect('https://' + req.get('host') + req.url);
    }
    next();
}

const express = require('express');
const app = express();
const rootDir = './dist/todoapp'; // output_path di angular.json
require('dotenv').config() // tidak perlu deklare variable

process.env.NODE_ENV === 'production' && app.use(requireHTTPS)

// app.use(requireHTTPS); // komen line ini apabila dicoba di local server
app.use(express.static(rootDir));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: rootDir}),
);

const port = process.eventNames.PORT || 8080
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// npm run build => menjalankan proses build => folder yang sudah ditentukan