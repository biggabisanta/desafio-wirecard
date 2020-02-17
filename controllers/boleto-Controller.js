module.exports = function(app){

    app.get('/pagamentos/boleto', function(req, res){
        console.log('Recebida resquisição de pagamento')
    
        res.send('12390.00005 00000.00006 00000.00007 8 56760000015075');
    });
}