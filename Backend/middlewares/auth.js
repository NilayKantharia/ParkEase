const {getUser} = require('../services/auth');

const restrictedToLoggedInUsersOnly = (req, res, next) => {
    const userId = req.cookies?.uid;
    if(!userId) {
        return res.status(403).json({success: false, unauthorized:"Please Login First"});
    }
    const user = getUser(userId);
    if(!user) {
        return res.status(403).json({success: false, unauthorized:"Please Login First"});
    }
    req.userId = user.id;
    next();
}

module.exports = {
    restrictedToLoggedInUsersOnly,
}