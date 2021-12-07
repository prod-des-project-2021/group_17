const userDB = require("../models/User");
const User = require("../models/User");

const createUser = async (content) => {
    const usr = userDB.build(content);
    await usr.save();
}

const fetchUsers = async() => {
    return await User.findAll({attributes:{exclude: ['password']}}).then(function (users) {
        return users.map(function(obj) {return obj.dataValues});
    });
}

const fetchUserByID = async(uid) => {
    return await User.findOne({where: {id: uid}, attributes: {exclude: ['password']}}).then(function (user) {
        if(!user)
            return null;
        else
            return user.dataValues;
    });
}

const removeUser = async(uid) => {
    await User.destroy({where: {id: uid}});
}

const editUser = async(content, uid) => {
    var to_update = {};
    for(var key of Object.keys(content)){
        if(key != 'isAdmin')
            to_update[key] = content[key];
    }

    await User.update(to_update, {where: {id: uid}});
}

module.exports = {
    createUser,
    fetchUsers,
    fetchUserByID,
    removeUser,
    editUser
}