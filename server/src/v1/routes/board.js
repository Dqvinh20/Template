const router = require("express").Router();
const { body } = require("express-validator");

const validator = require("../handlers/validation");
const tokenHandler = require("../handlers/tokenHandler");
const boardController = require("../controllers/board");

// [POST] /
router.post("/", tokenHandler.verifyToken, boardController.create);

// [GET] /
router.get("/", tokenHandler.verifyToken, boardController.getAll);

module.exports = router;
