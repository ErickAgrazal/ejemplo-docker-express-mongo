const { Answer } = require('_helpers/db');

function getAll() {
  return Answer.find().select('answer id');
}

function getById(id) {
  return Answer.findById(id).select('answer id');
}

function create(options) {
  return Answer.create(options);
}

async function update(id, { answer }) {
  const qs = await getById(id);
  qs.answer = answer;
  return qs.save();
}

async function remove(id) {
  return Answer.findByIdAndRemove(id);
}


module.exports = {
  getAll, getById, create, update, remove
}