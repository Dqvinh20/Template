const router = require("express").Router();
const { body } = require("express-validator");

const validator = require("../handlers/validation");
const tokenHandler = require("../handlers/tokenHandler");
const User = require("../models/user");
const userController = require("../controllers/user");

// [POST] /signup
router.post(
  "/signup",
  body("username")
    .isLength({ min: 8 })
    .withMessage("Username must be at least 8 characters long"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  body("username").custom((value) => {
    return User.findOne({ username: value }).then((user) => {
      if (user) {
        return Promise.reject("Username already in use");
      }
    });
  }),
  validator.validate,
  userController.register
);

// [POST] /login
router.post(
  "/login",
  body("username")
    .isLength({ min: 8 })
    .withMessage("Username must be at least 8 characters long"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
  validator.validate,
  userController.login
);

// [POST] /verify-token
router.post("/verify-token", tokenHandler.verifyToken, (req, res) => {
  res.status(200).json({ user: req.user });
});

module.exports = router;
