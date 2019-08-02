const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    answer: { type: String, unique: true, required: true },
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Answer', schema);