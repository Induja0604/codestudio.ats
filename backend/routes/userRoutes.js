const router = require("express").Router();
const { getUsers, toggleUser } = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");

router.get("/", auth, getUsers);
router.put("/:id", auth, toggleUser);

module.exports = router;