const Accounts = require("./accounts-model.js");

async function checkAccountPayload(req, res, next) {
  const body = req.body;
  if (!body.name || !body.budget) {
    next({ message: `name and budget are both required`, status: 400 });
  } else if (typeof body.name !== "string") {
    next({ message: "name of account must be a string", status: 400 });
  } else if (body.name.length <= 2 || body.name.length >= 101) {
    next({
      message: "name of account must be between 3 and 100 characters",
      status: 400,
    });
  } else if (typeof body.budget != "number") {
    next({ message: "budget must be a number", status: 400 });
  } else {
    next();
  }
}

// async function checkAccountNameUnique(req, res, next) {
//   const body = req.body;
//   const name = await Accounts.getAll();
  
//   // // name is currently an array of objects
//   // map over name and check if we see the name from 
//   // // the user's request in it, we wish to throw an error message
//   // // otherwise, lets create the new account.

 
//   // // try doing your search first, if the result is found
//   // // create your statements
//   // // if not found , still create your statements afterwards.
  
//   const foundName = name.map((info) => {
    
//     if (info.name === body.name) {
//       return info;
//     }
//   })
//   if (foundName.length > 0) {
//     next({message: "this name is taken", status: 400})
//   } else {
//     next()
//   }
// }

async function checkAccountId(req, res, next) {
  const { id } = req.params;
  try {
    const data = await Accounts.getById(id);
    if (data) {
      req.data = data;
      next();
    } else {
      next({ message: `${id} is not a valid id`, status: 404 });
    }
  } catch (err) {
    next({ error: err, message: err.message, status: 500 });
  }
}

module.exports = {
  checkAccountPayload: checkAccountPayload,  
  checkAccountId: checkAccountId,
};
