import User from "../../models/User";
import Token from "../../models/Token";

import connection from "../../middleware/Connection";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
import config from "../../nodemailerConfig";
const transporter = nodemailer.createTransport(config);

const handler = async (req, res) => {
  try {
    if (
      !req.body.email ||
      !req.body.firstname ||
      !req.body.lastname ||
      !req.body.password
    ) {
      return res.json({
        error: "Enter All Fields",
      });
    }

    let user = await User.findOne({ email: req.body.email });
    if (user && user.verified)
      return res
        .status(409)
        .send({ error: "User with given email already Exist!" });

    if (user) {
      user.remove();
    }
    const hashPassword = await bcrypt.hash(req.body.password, 12);

    // new user created along with the profile
    user = await new User({
      ...req.body,
      password: hashPassword,
      name: req.body.firstname + " " + req.body.lastname,
      email: req.body.email,
      fname: req.body.firstname,
      lname: req.body.lastname,
    }).save();

    // TOKEN GENERATED FOR USER
    const token = await new Token({
      userId: user._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();

    // console.log("token", token);
    const url = `${process.env.hostUrl}/email/verification/${user.id}/${token.token}`;
    const message = "an email is send to your mail";
    const options = {
      from: process.env.SendingEmail,
      to: `${user.email}`,
      subject: `${message}`,
      text: `${url}`,
    };

    await transporter.sendMail(options, function (err, info) {
      //   if (err) {
      //     // console.log("Error", err);
      //   } else {
      //     // console.log("Email sent: ", info.response);
      //   }
    });

    return res
      .status(201)
      .send({ message: "An Email sent to your account please verify" });
  } catch (error) {
    // console.log(error);
    res.status(500).send({ error: "Internal Server Error" });
  }
};
export default connection(handler);
