const Accounts = require("./accounts-model.js");
const EE = require("../expressError.js");

async function checkAccountPayload(req, res, next) {}

async function checkAccountNameUnique(req, res, next) {
  // DO YOUR MAGIC
}

async function checkAccountId(req, res, next) {
  const { id } = req.params;
  try {
    const data = await Accounts.getById(id);
    if (data) {
      req.data = data;
      next();
    } else {
      const err = new EE("id not found", 404);
      next(err);
    }
  } catch (err) {
    next(new EE(err, 500));
  };
};

module.exports = {
  checkAccountPayload: checkAccountPayload,
  checkAccountNameUnique: checkAccountNameUnique,
  checkAccountId: checkAccountId,
};
