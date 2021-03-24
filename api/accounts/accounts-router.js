const router = require("express").Router();
const Accounts = require("./accounts-model.js");
const mw = require("./accounts-middleware.js");
const EE = require("../expressError.js");

router.get("/", async (req, res, next) => {
  try {
    const account = await Accounts.getAll();
    res.status(200).json(account);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", mw.checkAccountId, async (req, res, next) => {
  try {
    res.status(200).json(req.data);
  } catch (err) {
    next(new EE(err, 500));
  }
});

router.post("/", async (req, res, next) => {
  const newAcct = req.body;
  try {
    const data = await Accounts.create(newAcct);
    res.status(200).json(data);
  } catch (err) {
    next(new EE(err, 500));
  }
});

router.put("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.use((err, req, res, next) => {
  err.statusCode = err.statusCode ? err.statusCode : 500;
  res.status(err.statusCode).json({ message: err.message });
});

module.exports = router;
