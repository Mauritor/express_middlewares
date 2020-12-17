const express = require('express');
const limiter = require('./limiter');
const favicon = require('serve-favicon');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();


//MIDDLEWARES
app.use(morgan("common"));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(helmet({}));
app.use(cors());
app.use(limiter);

//PORT
const port = 3000

app.get('/', (req, res) => {
    res.json({
        message: "Hello. How are you?"
    })
})

//LISTEN
app.listen(port, () => console.log(`Server listening on port ${port}`));