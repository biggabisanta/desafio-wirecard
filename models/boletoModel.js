const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const boletoSchema = new Schema({
    quantidade: {type: String, required: true },
    tipo: {type: String, required: true},
    numeroDoBoleto: {type: Number, required: true},

    
})

const boletoModel = mongoose.model('boleto', boletoSchema)

module.exports = boletoModel;
 
/// AQUI TEM QUE RETORNAR UM NUMERO DO BOLETO