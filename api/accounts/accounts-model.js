const db = require("../../data/db-config");

const getAll = () => {
  // DO YOUR MAGIC
  const allAccounts = db("accounts");
  return allAccounts;
};

const getById = (id) => {
  // DO YOUR MAGIC
  const something = db("accounts").where({ id }).first();
  return something;
};

const create = async (newAccountInfo) => {
  // DO YOUR MAGIC
  const newAccountID = await db("accounts").insert(newAccountInfo);
  return newAccountID[0];
};

const updateById = async (id, changes) => {
  // DO YOUR MAGIC
  const numberOfAccountsUpdated = await db("accounts")
    .where({ id })
    .update(changes);
  // console.log("numberOfAccountsUpdated ---> ", numberOfAccountsUpdated);
  return numberOfAccountsUpdated;
};

const deleteById = async (id) => {
  // DO YOUR MAGIC
  const deletedAccount = await db("accounts").where({ id }).del();
  console.log("deletedAccount ---> ", deletedAccount);
  return deletedAccount;
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
