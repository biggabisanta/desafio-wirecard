module.exports = function(app){

    app.post('/pagamentos/comprador', 
     function(req, res){
        const comprador = req.body;
        console.log('Retornado com sucesso');
        
        comprador.status = 'Realizado com sucesso';
    

        res.send(comprador)

    })
}