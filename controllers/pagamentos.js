module.exports = function(app){

    app.get('/pagamentos', function(req, res){
        console.log('Recebida resquisição de pagamento')
    
        res.send('OK');
    });

    app.post('/pagamentos/pagamento', function(req, res){
        const pagamento = req.body;
        console.log(pagamento);
        res.send('OK')
    })
}

