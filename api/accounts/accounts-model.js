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
};

const updateById = async (id, account) => {
  // DO YOUR MAGIC
};

const deleteById = async (id) => {
  // DO YOUR MAGIC
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
