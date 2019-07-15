const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const showSchema = new Schema({
    username: { type: String, required: true },
    venue: { type: String, required: true },
    band: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
})

const Show = mongoose.model('Show', showSchema);

module.exports = Show;