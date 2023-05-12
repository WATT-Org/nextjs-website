import connection from "../../middleware/Connection";
import User from "../../models/User";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handler = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.json({ error: "Enter your email and password" });

  User.findOne({ email: email }, (err, user) => {
    if (err)
      return res.status(401).json({ error: "Invalid email or password" });

    if (!user) return res.status(401).json({ error: "Invalid Email/Password" });

    if (!user.verified)
      return res.status(401).json({ error: "User email not verified" });

    bcrypt
      .compare(password, user.password)
      .then((doMatch) => {
        if (doMatch) {
          const { _id, name, email, pic } = user;

          const token = jwt.sign({ _id: user._id }, process.env.tokenString, {
            expiresIn: "86400",
          });

          return res.json({
            token,
            user: { _id, name, email, pic },
            message: "Login Successful!",
          });
        }

        return res.status(401).json({ error: "Incorrect Password" });
      })

      .catch(() => res.status(500).json({ error: "Internal Server Error" }));
  });
};
export default connection(handler);
