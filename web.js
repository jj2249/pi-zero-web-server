const express = require('express');
const app = express();
const port = 8080;

app.get('/', function (req, res) {
	res.sendFile('/home/pi/nodes/public/home.html');
});

app.listen(port, () => console.log('Example app listening at http://localhost:${port}'));
