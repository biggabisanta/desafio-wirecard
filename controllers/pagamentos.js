module.exports = function(app){

    app.get('/pagamentos', function(req, res){
        console.log('Recebida resquisição de pagamento')
    
        res.send('OK');
    });
    
}

