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
const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    const user = getUser(token);

    if (!user) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    req.user = user;
    next();
};
const authorize = (roles) => (req, res, next) => {
    console.log(req.user)
    if (!roles.includes(req.user.role)) {
        console.log(req.user)
        return res.status(403).json({ error: "you are not authorized" });
    }
    next();
};


module.exports = {
    restrictedToLoggedInUsersOnly,
    authenticate,
    authorize,

}