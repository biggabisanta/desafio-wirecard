const mongoose = riquire('mongoose')

const Schema = mongoose.Schema;
const compradorSchema = new Schema({
    nome: {type: String, riquired: true },
    email: {type: String, required: true},
    cpf: {type: Number, required: true},

});

const compradorModel = mongoose.model('comprador', compradorSchema)

module.exports = compradorModel;



