var mysql = require('./dbConnectionsController');

exports.employerLogin = function(req, res){
	var connection=mysql.getConnection();
	var query = connection.query("Select * from LoginInfo where UserName = ? and Password=? ",[req.body.UserName, req.body.Password] , function(err, result){
		if (err) {
			console.log("Error: "+err);								
		} 
		else{
			// console.log(" ");
			// console.log("Record Found: "+ result[0].RolesID + " " + result[0].UserName + " " + req.body.UserName + " " + result[0].Password + " " + req.body.Password);	
			// console.log(" ");
			if((result[0].UserName == req.body.UserName) && (result[0].Password == req.body.Password)){
				//req.session.UserName = login[0].UserName;
				if(result[0].RolesID == "1"){
					//console.log("Reached Here. 1");
					res.render('aFirst'); 
				}else if(result[0].RolesID == "2"){
					//console.log("Reached Here. 2"); 
					res.render('eHome'); 
				}else{
					//console.log("Reached Here. 3"); 
					res.render('index');
				}
			}
			else{
				//console.log("Reached Here. 4"); 
				res.render('index');  //Change the URL.
			}
		}
	});
}