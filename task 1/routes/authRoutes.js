const express = require("express");
const { register, login } = require("../controllers/authController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// Example of protected route
router.get("/profile", protect, (req, res) => {
  res.json({ message: "This is a protected route", userId: req.user.id });
});

module.exports = router;
