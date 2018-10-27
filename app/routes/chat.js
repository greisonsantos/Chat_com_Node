module.exports = function(application){
	 application.post('/chat', function(req,res){
        application.app.controllers.chat.inichat(application,req,res);
 	 });

	 application.get('/chat', function(req,res){
		application.app.controllers.chat.inichat(application,req,res);
	});
}