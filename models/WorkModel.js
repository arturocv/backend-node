const {Schema, model} = require('mongoose');

const WorkSchema = Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true,
    },
    complete: {
        type: Boolean,
        require: true
    }
})

module.exports = model('Work', WorkSchema);