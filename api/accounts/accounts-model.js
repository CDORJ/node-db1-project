const db = require("../../data/db-config.js");

async function getAll() {
  const account = await db("accounts");
  return account;
}

async function getById(id) {
  const account = await db("accounts").where({ id }).first();
  return account;
}

async function create(body) {
  const newId = await db("accounts").insert(body);
  const newAcct = getById(newId);
  return newAcct;
}

async function updateById(id, account) {
  const updatedId = await db("accounts").update(account).where({ id });
  const updatedAccount = getById(updatedId);
  return updatedAccount;
}

async function deleteById(id) {
  const deleteAcct = await db("accounts").where({ id }).del();
  return deleteAcct;
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
