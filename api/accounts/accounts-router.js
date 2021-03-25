const router = require("express").Router();
const Accounts = require("./accounts-model.js");
const mw = require("./accounts-middleware.js");

router.get("/", async (req, res, next) => {
  try {
    const account = await Accounts.getAll();
    res.status(200).json(account);
  } catch (err) {
    next({ error: err, message: err.message, status: 500 });
  }
});

router.get("/:id", mw.checkAccountId, async (req, res, next) => {
  try {
    res.status(200).json(req.data);
  } catch (err) {
    next({ error: err, message: err.message, status: 500 });
  }
});

router.post("/", mw.checkAccountPayload, mw.checkAccountNameUnique, async (req, res, next) => {
  const newAcct = req.body;
  try {
    const data = await Accounts.create(newAcct);
    res.status(200).json(data);
  } catch (err) {
    next({ error: err, message: err.message, status: 500 });
  }
});

router.put("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.use((error, req, res, next) => {
  error.error && console.error(error.error);
  res.status(error.status).json({ message: error.message });
});

module.exports = router;
