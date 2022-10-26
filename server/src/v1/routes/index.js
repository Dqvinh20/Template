var router = require("express").Router();

// api/v1/auth/:slug
router.use("/auth", require("./auth"));

// api/v1/board/:slug
router.use("/boards", require("./board"));

module.exports = router;
