const router = require("express").Router();
const Account = require("./accounts-model.js");
const MW = require("./accounts-middleware.js");

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

router.get("/:id", MW.checkAccountId, (req, res) => {
  // DO YOUR MAGIC
  // returns an account by the given id.
  res.status(200).json(req.account);
});

router.post("/", MW.checkAccountPayload, async (req, res, next) => {
  // DO YOUR MAGIC
  // returns the created account. Leading or trailing whitespace on budget name should be trimmed before saving to db.
  try {
    const account = await Account.create(req.body);
    res.status(201).json(account);
  } catch (err) {
    next(err);
  }
});

router.put(
  "/:id",
  MW.checkAccountId,
  MW.checkAccountPayload,
  async (req, res, next) => {
    // DO YOUR MAGIC
    // returns the updated account. Leading or trailing whitespace on budget name should be trimmed before saving to db.
    try {
      const account = await Account.updateById(req.params.id, req.body);
      res.json(account);
    } catch (error) {
      next(error);
    }
  }
);

router.delete("/:id", MW.checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  // returns the deleted account.
  try {
    const account = await Account.deleteById(req.params.id);
    res.json(account);
  } catch (error) {
    next(error);
  }
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
