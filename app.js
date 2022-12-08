require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static('public'));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen(PORT, console.log(`Server running on port ${PORT}`));
