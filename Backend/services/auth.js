const jwt = require('jsonwebtoken');
const secret = "Pinki ki bhi pink nahi hai, purple hai";

const setUser = (user) => {
    payload = {
        id : user.user_id,
        email : user.mail_id,
        role : user.role
    }
    return jwt.sign(payload, secret);
}

const getUser = (token) => {
    try{
        if(!token) return;
        return jwt.verify(token, secret);
    } catch(err) {
        return;
    }
}

module.exports = {
    setUser,
    getUser
}