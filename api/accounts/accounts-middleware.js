exports.checkAccountPayload = (req, res, next) => {
  // returns a status 400 with if req.body is invalid:
  // DO YOUR MAGIC
  //   If either name or budget are undefined, return { message: "name and budget are required" }
  // If name is not a string, return { message: "name of account must be a string" }
  // If the trimmed name is shorter than 3 or longer than 100, return { message: "name of account must be between 3 and 100" }
  // If budget is not a number, return { message: "budget of account must be a number" }
  // If budget is a negative number or over one million, return { message: "budget of account is too large or too small" }
};

// exports.checkAccountNameUnique = async (req, res, next) => { -- In migrations file the '.unique' takes care of this middleware
//   // DO YOUR MAGIC
//   // returns a status 400 with a { message: "that name is taken" } if the trimmed req.body.name already exists in the database
// };

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  // returns a status 404 with a { message: "account not found" } if req.params.id does not exist in the database
};
