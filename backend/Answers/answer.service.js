const { Question } = require('_helpers/db');

function getAll() {
  return Question.find().select('name id');
}

function getById(id) {
  return Question.findById(id).select('name id');
}

function create(options) {
  return Question.create(options);
}

async function update(id, { name }) {
  const qs = await getById(id);
  qs.name = name;
  return qs.save();
}

async function remove(id) {
  return Question.findByIdAndRemove(id);
}


module.exports = {
  getAll, getById, create, update, remove
}