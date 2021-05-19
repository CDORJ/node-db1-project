const db = require("../../data/db-config");

const getAll = () => {
  // DO YOUR MAGIC
  const allAccounts = db("accounts");
  return allAccounts;
};

const getById = (id) => {
  // DO YOUR MAGIC
  const specificAccount = db("accounts").where({ id });
  return specificAccount;
};

const create = async (account) => {
  // DO YOUR MAGIC
  const newAccount = await db("accounts").insert({
    name: account.name,
    budget: account.budget,
  });
  return newAccount;
};

const updateById = async (id, account) => {
  // DO YOUR MAGIC
  const updatedAccount = await db("accounts")
    .where({ id })
    .update({ name: account.name, budget: account.budget });
  return updatedAccount;
};

const deleteById = async (id) => {
  // DO YOUR MAGIC
  const deletedAccount = await db("accounts").where({ id }).del();
  return deletedAccount;
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
