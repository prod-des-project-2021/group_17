const userDB = require("../models/User");

const createUser = async (content) => {
    const usr = userDB.build(content);
    await usr.save();
    
    console.log("User saved");
}

module.exports = {
    createUser
}