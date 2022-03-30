const express = require('express');
const app = express()
const port = 5000
const path = require('path');
const cors = require('cors');

// const CLIENT_BUILD_PATH = path.join(__dirname, "../client/build");

// app.use(express.static(CLIENT_BUILD_PATH));
// app.get("/", function (req, res) {
//     res.sendFile(path.join(CLIENT_BUILD_PATH, "index.html"));
// });

app.use(cors());
app.use(express.json());
app.use(require('./routes/routes'));

app.get('/', async (req, res) => {
    res.send('Hola');
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})