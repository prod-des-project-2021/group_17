const userService = require("../services/user.service")
const {createUser} = userService

const addUser = async (req, res, next) => {
  const content = req.body;
  try {
    await createUser(content)
    // other service call (or same service, different function can go here)
    // i.e. - await generateBlogpostPreview()
    res.sendStatus(201)
    next()
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500)
  }
}

module.exports = {
    addUser
}