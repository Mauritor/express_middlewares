const isAdmin = (req, res, next) => {
    if (req.body.isAdmin) {
        next();
    }else{
        res.status(403).send(`Sorry but you aren't an admin, and you don't have access to route ${req.url}`)
    }
 }

 module.exports = isAdmin;