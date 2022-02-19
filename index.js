require('dotenv').config();

const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const { getShift } = require('./routes');

app.get('/', getShift);

app.listen(process.env.PORT);
