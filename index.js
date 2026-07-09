const express = require('express');
const { getRoster } = require('./scraper');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.json({ message: "EVOS API Jalan" }));
app.get('/roster', async (req, res) => res.json(await getRoster()));

app.listen(PORT, () => console.log(`Jalan di port ${PORT}`));
