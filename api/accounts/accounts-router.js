const router = require("express").Router();

router.get("/", async (req, res, next) => {
  // DO YOUR MAGIC
  // returns an array of accounts (or an empty array if there aren't any).
});

router.get("/:id", (req, res, next) => {
  // DO YOUR MAGIC
  // returns an account by the given id.
});

router.post("/", (req, res, next) => {
  // DO YOUR MAGIC
  // returns the created account. Leading or trailing whitespace on budget name should be trimmed before saving to db.
});

router.put("/:id", (req, res, next) => {
  // DO YOUR MAGIC
  // returns the updated account. Leading or trailing whitespace on budget name should be trimmed before saving to db.
});

router.delete("/:id", (req, res, next) => {
  // DO YOUR MAGIC
  // returns the deleted account.
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  // CALL next(err) IF THE PROMISE REJECTS INSIDE YOUR ENDPOINTS
  res.status(500).json({
    message: "something went wrong inside the accounts router",
    errMessage: err.message,
  });
});

module.exports = router;
