const Account = require("./accounts-model.js");

// chad
exports.checkAccountPayload = async (req, res, next) => {
  // returns a status 400 with if req.body is invalid:
  // DO YOUR MAGIC
  //   If either name or budget are undefined, return { message: "name and budget are required" }
  // If name is not a string, return { message: "name of account must be a string" }
  // If the trimmed name is shorter than 3 or longer than 100, return { message: "name of account must be between 3 and 100" }
  // If budget is not a number, return { message: "budget of account must be a number" }
  // If budget is a negative number or over one million, return { message: "budget of account is too large or too small" }
  const account = req.body;
  if (!account.name || !account.budget) {
    next({ message: `name and budget are both required`, status: 400 });
  } else if (typeof account.name !== "string") {
    next({ message: "name of account must be a string", status: 400 });
  } else if (account.name.length <= 2 || account.name.length >= 101) {
    next({
      message: "name of account must be between 3 and 100 characters",
      status: 400,
    });
  } else if (typeof account.budget != "number") {
    next({ message: "budget must be a number", status: 400 });
  } else {
    next();
  }
};

// exports.checkAccountNameUnique = async (req, res, next) => { -- In migrations file the '.unique' takes care of this middleware
//   // DO YOUR MAGIC
//   // returns a status 400 with a { message: "that name is taken" } if the trimmed req.body.name already exists in the database
// };

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  // returns a status 404 with a { message: "account not found" } if req.params.id does not exist in the database
  try {
    const account = await Account.getById(req.params.id);
    if (account) {
      req.account = account;
      next();
    } else {
      const err = new Error("account not found");
      err.statusCode = 404;
      next(err);
    }
  } catch (error) {
    error.statusCode = 500;
    next(error);
  }
};
