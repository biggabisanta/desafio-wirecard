const mongoose = riquire('mongoose')

const Schema = mongoose.Schema;
const cartaoSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId,auto: true},
    nomeDoTitular: {type: String, riquired: true },
    numeroDoCartao: {type: Number, required: true},
    dataDeExpericao: {type: Number, required: true},
    numeroCVV: {type: Number, required: true},

});

const cartaoModel = mongoose.model('cartão', cartaoSchema)

module.exports = cartaoModel;