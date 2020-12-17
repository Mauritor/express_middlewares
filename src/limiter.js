const rateLimit = require('express-rate-limit'); 
const limiter = rateLimit({
    windowMs: 60*1000, //1 minute  (15*60*1000 = 15 minutes)
    max: 10, //limit each ip to requests
    message: "Too many accounts created from this IP, please try again after a MINUTE" 
})

module.exports = limiter;