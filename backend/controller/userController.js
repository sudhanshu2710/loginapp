const User = require('../model/userModel');

exports.getAllUser = async (req, res, next) => {
  try {
    console.log('get all users');
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      data: users,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await User.create(req.body);
    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (err) {
    console.log(err);
  }
};
