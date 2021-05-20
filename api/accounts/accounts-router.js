const router = require("express").Router();
const Accounts = require("./accounts-model");
const mw = require("./accounts-middleware");

router.get("/", async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    const accounts = await Accounts.getAll();
    res.status(200).json(accounts);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  // DO YOUR MAGIC
  const { id } = req.params;

  try {
    const specificAccount = await Accounts.getById(id);
    if (specificAccount === undefined) {
      res.status(404).json({ message: "account not found" });
    } else {
      res.status(200).json(specificAccount);
    }
  } catch (error) {
    next(error);
  }
});

router.post(
  "/",
  mw.checkAccountPayload,
  mw.checkAccountNameUnique,
  async (req, res, next) => {
    // DO YOUR MAGIC
    try {
      // const newAccountID = await Accounts.create(req.body);
      // console.log("newAccountID --->", newAccountID);
      // res.status(201).json(req.body);
    } catch (error) {
      next(error);
    }
  }
);

router.put("/:id", async (req, res, next) => {
  // DO YOUR MAGIC
  const { id } = req.params;
  const updates = req.body;
  const confirmation = await Accounts.updateById(id, updates);
  if (confirmation) {
    const [updatedAccount] = await Accounts.getById(id);
    res.status(200).json(updatedAccount);
  }
});

router.delete("/:id", async (req, res, next) => {
  // DO YOUR MAGIC
  const { id } = req.params;
  const [accountToDelete] = await Accounts.getById(id);
  const confirmation = await Accounts.deleteById(id);

  if (!accountToDelete) {
    res.status(404).json({ message: "account not found" });
  }

  if (confirmation) {
    res.status(200).json(accountToDelete);
  }
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
