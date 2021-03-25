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

router.post("/", mw.checkAccountPayload, async (req, res, next) => {
  const newAcct = req.body;
  try {
    const data = await Accounts.create(newAcct);
    res.status(201).json(data);
  } catch (err) {
    next({ error: err, message: err.message, status: 500 });
  }
});

router.put(
  "/:id",
  mw.checkAccountPayload,
  mw.checkAccountId,
  async (req, res, next) => {
    const changes = req.body;
    const { id } = req.params;
    try {
      const update = await Accounts.updateById(id, changes);
      res.status(202).json(update);
    } catch (err) {
      next({ error: err, message: err.message, status: 500 });
    }
  }
);

router.delete("/:id", mw.checkAccountId, async (req, res, next) => {
  try {
    await Accounts.deleteById(req.params.id);
    res.status(204).send("");
  } catch (err) {
    next({ error: err, message: err.message, status: 500 });
  }
});

router.use((error, req, res, next) => {
  error.error && console.error(error.error);
  res.status(error.status).json({ message: error.message });
});

module.exports = router;
