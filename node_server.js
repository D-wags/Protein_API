var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {"Content-Type": "text/html"});
	res.end(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>Server</title>
			</head>
			<body>
				<h1>Serving Da HTML like a <b>BOSS!</b></h1>
				<p>${req.url}</p>
				<p>${req.method}</p>
			</body>
		</html>

	`);
});

server.listen(3000, function() {
	console.log("Server Listening");
});



