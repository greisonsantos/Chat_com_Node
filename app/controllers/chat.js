module.exports.inichat =function(application,req,res){

	 var dadosForm = req.body;  //recuperando os dados do form com body-parser

     // validação do formulario
	 req.assert('apelido','Nome ou Apelido e obrigatório').notEmpty();
	 req.assert('apelido','Nome ou Apelido deve conter entre 3 e 15 caracteres').len(3,15);

    //recuperando os errod
      var erros = req.validationErrors();
      if (erros){
      	res.render("index",{validacao : erros}) //se tiver erros retorno para pagina do form
      	return;
      }

      res.render("chat");
}