const express = require("express");
const router = express.Router();

//@route GET /api/users/
//@route Tests users route
//@route Public

router.get("/", (req, res) => res.json({ msg: "Hello Users" }));

module.exports = router;
