const router = require("express").Router();
const Accounts = require("./accounts-model");

router.get("/", async (req, res, next) => {
  // DO YOUR MAGIC
  const accounts = await Accounts.getAll();
  res.status(200).json(accounts);
});

router.get("/:id", async (req, res, next) => {
  // DO YOUR MAGIC
  const { id } = req.params;
  const accounts = await Accounts.getById(id);
  const specificAccount = accounts[0];

  if (!specificAccount) {
    res.status(404).json({ message: "account not found" });
  } else {
    res.status(200).json(specificAccount);
  }
});

router.post("/", async (req, res, next) => {
  // DO YOUR MAGIC
  const newAccountInfo = req.body;
  const newAccountID = await Accounts.create(newAccountInfo)[0];
  const newAccount = await Accounts.getById(newAccountID);

  res.status(200).json(newAccount);
});

router.put("/:id", (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete("/:id", (req, res, next) => {
  // DO YOUR MAGIC
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
