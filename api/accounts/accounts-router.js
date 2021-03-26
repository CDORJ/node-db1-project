const router = require("express").Router();
const Account = require("./accounts-model.js");

async function checkId(req, res, next) {
  try {
    const account = await Account.getById(req.params.id);
    if (account) {
      req.account = account;
      next();
    } else {
      const err = new Error("id not found");
      err.statusCode = 404;
      next(err);
    }
  } catch (error) {
    err.statusCode = 500;
    next(error);
  }
}

router.get("/", async (req, res, next) => {
  // DO YOUR MAGIC
  // returns an array of accounts (or an empty array if there aren't any).
  try {
    const data = await Account.getAll();
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", checkId, (req, res) => {
  // DO YOUR MAGIC
  // returns an account by the given id.
  res.status(200).json(req.account);
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
  err.statusCode = err.statusCode || 500;
  res.status(err.statusCode).json({
    message: "something went wrong inside the accounts router",
    errMessage: err.message,
  });
});

module.exports = router;
