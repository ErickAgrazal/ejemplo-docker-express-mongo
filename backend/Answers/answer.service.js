const { Answer } = require('_helpers/db');

function getAll() {
  return Answer.find().select('name id');
}

function getById(id) {
  return Answer.findById(id).select('name id');
}

function create(options) {
  return Answer.create(options);
}

async function update(id, { name }) {
  const qs = await getById(id);
  qs.name = name;
  return qs.save();
}

async function remove(id) {
  return Answer.findByIdAndRemove(id);
}


module.exports = {
  getAll, getById, create, update, remove
}