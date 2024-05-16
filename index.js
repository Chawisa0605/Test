const cookieParser = require('cookie-parser');
const express = require('express');
const Logger = require('./middlewares/logger');

const app = express();
const port = 4000;

app.use(cookieParser());

app.use(Logger);

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/cookies', require('./routers/cookies'));

app.listen(port, () => console.log(`Server running on port ${port}`));