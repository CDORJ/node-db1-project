// reference: http://knexjs.org/

const db = require("../../data/db-config");

const getAll = () => {
  // resolves to an array of accounts (or an empty array)
  // DO YOUR MAGIC
  return db("accounts");
};

const getById = (id) => {
  //  resolves to an account by the given id
  // DO YOUR MAGIC
  const account = db("accounts").where({ id }).first();
  return account;
};

const create = async (account) => {
  // resolves to the newly created account
  // DO YOUR MAGIC
};

const updateById = async (id, account) => {
  // resolves to the updated account
  // DO YOUR MAGIC
};

const deleteById = async (id) => {
  // resolves to the deleted account
  // DO YOUR MAGIC
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
};
