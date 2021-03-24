async function checkAccountPayload(req, res, next) {
  const body = req.body;
  if (!body )
  
}

async function checkAccountNameUnique(req, res, next){
  // DO YOUR MAGIC
}

async function checkAccountId(req, res, next){
  // DO YOUR MAGIC
}


module.exports = {
  checkAccountPayload: checkAccountPayload,
  checkAccountNameUnique: checkAccountNameUnique,
  checkAccountId: checkAccountId,
}