const express = require('express');
const app = express();
const port = process.env.PORT || 3333;
const router = require('./router');
const cors = require('cors');

require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use(router);
app.listen(port);