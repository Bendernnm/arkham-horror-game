const express = require('express');

const app = express();

app.use(express.static('public'));

const PORT = 8080;
const HOST = '192.168.0.146';

app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`));
