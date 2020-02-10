module.exports = function(app){

    app.get('/pagamentos', function(req, res){
        console.log('Recebida resquisição de pagamento')
    
        res.send('OK');
    });

    app.post('/pagamentos/pagamento', function(req, res){
        const pagamento = req.body;
        console.log('processando uma requisicao de um novo pagamento');
        
        pagamento.status = 'CRIADO';
        pagamento.data = new Date; 


        res.send(pagamento)

    })
}

