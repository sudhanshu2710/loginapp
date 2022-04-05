const User = require('../model/userModel');

exports.login = async (req, res, next) => {
  try {
    console.log(req.body);
    const { email, password } = req.body;
    console.log(email, password);
    if (!email || !password) throw new Error('email or password not filled');
    const newarr = await User.findOne({ email, password });
    // console.log(users);
    // const newarr = users.find(
    //   (e) => e.email == email && e.password == password
    // );
    if (!newarr) console.log('user doesnot exits');
    else {
      console.log(newarr);
      res.status(200).json({
        status: 'user logged in',
        data: newarr,
      });
    }
  } catch (err) {
    console.log(err);
  }
};
