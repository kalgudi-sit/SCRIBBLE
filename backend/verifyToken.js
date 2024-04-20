const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if(!token) {
        return res.status(401).json({ message: "Access Denied. No token provided. "});
    }
    jwt.verify(token, process.env.SECRET, async (err, data) => {
        if(err) {
            return res.status(403).json({ message: "Invalid token. "});
        }
        console.log("Passed");
        req.userId = data._id;
        next();
    });
}

module.exports = verifyToken;