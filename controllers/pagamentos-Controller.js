module.exports = function(app){
    const { check, validationResult } = require('express-validator/check');
    
    app.get('/pagamentos', function(req, res){
        console.log('Recebida resquisição de pagamento')
    
        res.send('OK');
    });
    
    app.post('/pagamentos/pagamento', function(req, res){
        const pagamento = req.body;
        console.log('Pagamento realizado com sucesso!');
        
        pagamento.status = 'CRIADO';
        pagamento.data = new Date; 


        res.send(pagamento)

    })

    
}
 
