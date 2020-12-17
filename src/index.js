const express = require('express');
const limiter = require('./limiter');
const favicon = require('serve-favicon');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const saludo = require('./saludo');
const isAdmin = require('./isAdmin');

const app = express();


//MIDDLEWARES
app.use(express.json());
app.use(morgan("common"));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(helmet({}));
app.use(cors());
app.use(limiter);
app.use((res, req, next) => {
    console.log(saludo());
    next();
})
app.use('/dashboard', isAdmin);


//MAIN ROUTE
app.get('/', (req, res) => {
    res.json({
        message: "Hello. How are you?",
        status: saludo()
    })
})
//PROTECTED ROUTE
app.get('/dashboard', (req, res, next) => {
    res.send('Soy el Dashboard')
})

//PORT
const port = 3000

//LISTEN
app.listen(port, () => console.log(`Server listening on port ${port}`));