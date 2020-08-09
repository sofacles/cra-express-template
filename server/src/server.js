const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const paintChipsRoute = require('./routes/PaintCan');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(cookieParser());

app.get('/api/paints/', paintChipsRoute.getPaints);
