const router = require("express").Router();
const { getAll, create } = require("../controllers/requirementController");

router.get("/", getAll);
router.post("/", create);

module.exports = router;