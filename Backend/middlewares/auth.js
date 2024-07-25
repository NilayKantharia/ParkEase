const connection = require('../config/connection');
const {getUser} = require('../services/auth');

const restrictedToLoggedInUsersOnly = (req, res, next) => {
    const userId = req.cookies?.uid;
    if(!userId) {
        return res.status(401).json({success: false, unauthorized:"Please Login First"});
    }
    const user = getUser(userId);
    if(!user) {
        return res.status(401).json({success: false, unauthorized:"Please Login First"});
    }
    req.userId = user.id;
    next();
}
const authenticate = (req, res, next) => {
    const query = 'SELECT * FROM user WHERE user_id = ?;';
    const userId = req.userId;
    connection.query(query, [userId], (err, result) => {
        if(err || result.length==0){
            return res.status(400).json(err);
        }
        req.user = result[0];
        next();
    });
};

const authorize = (roles) => (req, res, next) => {
    req.user.role='admin';
    if (!roles.includes(req.user.role)) {
        return res.status(403).json({ error: "you are not authorized" });
    }
    next();
};


module.exports = {
    restrictedToLoggedInUsersOnly,
    authenticate,
    authorize,
}