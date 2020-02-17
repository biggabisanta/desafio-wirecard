const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const compradorSchema = new Schema({
    nome: {type: String, required: true },
    email: {type: String, required: true},
    cpf: {type: Number, required: true},

});

const compradorModel = mongoose.model('comprador', compradorSchema)

module.exports = compradorModel;



