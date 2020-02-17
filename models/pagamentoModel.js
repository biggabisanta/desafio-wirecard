const mongoose = require('mongoose')


const Schema = mongoose.Schema;
const pagamentoSchema = new Schema({
    valor: {type: String, required: true },
    tipo: {type: Boolean, required: true},
    cartaoCredito: {type: String, required: true},

});

const pagamentoModel = mongoose.model('pagamento', pagamentoSchema)

module.exports = pagamentoModel;


