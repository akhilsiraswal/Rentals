const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const salt = 10;
const User = require("../models/user");

exports.signup = (req, res) => {
  const { email } = req.body;

  User.find({ email: email }, (err, user) => {
    console.log(err);
    console.log(user.length);
    if (err) {
      res.status(500).json(err);
    }
    if (!user.length) {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (!err) {
          const user = new User(req.body);
          user.password = hash;
          user
            .save()
            .then((data) => {
              res.status(200).json(data);
            })
            .catch((err) => err);
        }
      });
    } else {
      res.status(200).json({
        message: "user already registered",
      });
    }
  });
};
exports.signin = (req, res) => {
  const { email } = req.body;

  //   res.send("hii");
  //   console.log(res);
  //   console.log("HII", email);

  User.find({ email: email }, (err, user) => {
    // res.send("hii hello");

    if (err) {
      // console.log(res);
      res.status(500).json(err);
    }
    if (!user.length) {
      res.status(500).json({
        message: "No user found",
      });
    } else {
        
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          console.log("error", err);
          return res.status(500).json({
            error: err,
          });
        }
        if (res) {
          res.status(200).json(user);
        } else {
          res.status(200).json({
            message: "wrong credentials",
          });
        }
      });
    }
  });
};
exports.signout = (req, res) => {};
