const mongoose = riquire('mongoose')

const Schema = mongoose.Schema;
const pagamentoSchema = new Schema({
    quantidade: {type: String, riquired: true },
    tipo: {type: String, required: true},
    cartaoCredito: {type: String, required: true},

});

const pagamentoModel = mongoose.model('pagamento', pagamentoSchema)

module.exports = pagamentoModel;


