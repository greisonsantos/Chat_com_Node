/* importar as configurações do servidor */
var app = require('./config/server');

/* parametrizar porta de escuta */

var server= app.listen(8000, function(){
    console.log('Servidor online');
});

var io =require('socket.io').listen(server); //modulo socket.io fica escutando na mesma porta que o http


//criando uma variavel global
app.set('io', io);

//  criar a conexão por web socket

//on alguem esta ouvindo
//emit alguém esta falando

// on('nome', function(data){})
//emit('nome', {})

//emit faz um pedido para realizar alguma ação e o on fica ouvindo pedidos de execução


io.on('connection', function(socket){

  console.log("user connectou");

  socket.on('disconnect', function(){
  	console.log("user desconnect");
  });
  //eventos para dialogos
    socket.on('msgParaServidor', function(data){
        socket.emit(
           'msgParaCliente',
            {apelido: data.apelido, mensagem:data.mensagem});

        socket.broadcast.emit(
           'msgParaCliente',
            {apelido: data.apelido, mensagem:data.mensagem});

          //atualizar a relaçaõ de participantes
        if (parseInt(data.apelido_atualizado) ==0){
         socket.emit(
           'participantesParaCliente',
            {apelido: data.apelido});

         socket.broadcast.emit(
           'participantesParaCliente',
            {apelido: data.apelido});
        }
    });

 


});