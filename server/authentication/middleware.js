const jwt = require('jsonwebtoken');
const secret = require('./secret.json');

const withAuth = function(req, res, next) {
    const token =
        req.body.token ||
        req.query.token ||
        req.headers['token'] ||
        req.cookies.token;
    if (!token) {
        res.status(401).send('Unauthorized: No token provided');
    } else {
        jwt.verify(token, secret.key, function(err, decoded) {
        if (err) {
            console.log(err);
            res.status(401).send('Unauthorized: Invalid token');
        } else {
            req.id = decoded.id;
            next();
        }
        });
    }
}

module.exports = withAuth;