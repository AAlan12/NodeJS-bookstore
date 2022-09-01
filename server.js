// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.urlencoded({extended: false}));

// app.get('/', (req, res) => {
//     res.writeHead(200,{'Content-Type': 'text/plain'});
//     res.end('hello world!');
// });

// app.get('/books', (req, res) => {
//     res.writeHead(200,{'Content-Type': 'text/plain'});
//     res.end('all books here! Are you Alan?');
// });


// app.listen(PORT,() => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// })

import app from './src/app.js'

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
        console.log(`Server is running on http://localhost:${PORT}`);
    })
