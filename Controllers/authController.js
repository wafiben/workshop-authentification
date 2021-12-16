const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const registerController = async (request, response) => {
  let user = request.body;
  try {
    const searchedUser = await User.findOne({ email: user.email });
    if (searchedUser) {
      return response.status(400).json({ errors:[{msg:"user already exists"}] });
    }
    const hashedPasword = await bcrypt.hash(user.password, 10);
    const newUser = await new User({
      username: user.username,
      email: user.email,
      password: hashedPasword,
    });
    await newUser.save();
    const token = jwt.sign(
      { username: newUser.username, email: newUser.email, id: newUser._id },
      process.env.KEY
    );
    response.status(200).json({ newUser, token });
  } catch (error) {
    response.status(500).json({ errors:[{msg:"error server"}] });
  }
};
const loginController = async (request, response) => {
  //request
  const user = request.body;
  try {
    //search for user
    const searchedUser = await User.findOne({ email: user.email });
    if (!searchedUser) {
      return response.status(401).json({ errors:[{msg:"you must register before"}] });
    }
    //compare the passwordl of the user request with the password saved on the databse (searchedUser)
    const result = await bcrypt.compare(user.password, searchedUser.password);
    if (!result) {
      return response.status(400).json({ errors:[{msg:"your passwordl is wrong"}] });
    }
    if (result == true) {
      const token = await jwt.sign(
        {
          username: searchedUser.username,
          email: searchedUser.email,
          id: searchedUser._id,
        },
        process.env.KEY
      );
      response.status(200).json({searchedUser,token});
    }
  } catch (error) {
    response.status(500).json({ message: "login failed" });
  }
};

module.exports = { registerController, loginController };
