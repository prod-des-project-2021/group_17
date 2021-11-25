const userDB = require("../models/User");
const User = require("../models/User");

const createUser = async (content) => {
    const usr = userDB.build(content);
    await usr.save();
    
    console.log("User saved");
}

const fetchUsers = async() => {
    //console.log(await  User.findAll())    
    
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

const editUser = async(content, user, uid) => {
    //console.log(content)
    console.log(user);
    usr = User.findOne({where: {id: uid}});
    if(usr != user){
        console.log("not allowed");
        return ;
    }
         

    var to_update = {};
    for(var key of Object.keys(content)){
        to_update[key] = content[key];
    }

    //console.log(to_update);
    
    await User.update(to_update, {where: {id: uid}});
}

module.exports = {
    createUser,
    fetchUsers,
    fetchUserByID,
    removeUser,
    editUser
}