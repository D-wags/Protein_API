
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

var proteins = [

	{
	 protein: "BaeKR3",
	 description: "A'prime KR from third module fo bacillaene synthase",
	 AAseq: `AKLJGFNSMRTORGGBGFBGFNGGGGFGDYUERERWETREWDFGBDFGBDFBGBGFDBDFBDFBGBDGFBGDBDFGBDGBGDBDGBGFBFDBGFDBDGBDFBGFDBFG`,
	 pdbcode: "4kty"
	},

	{
	 protein: "BaeKR4",
	 description: "A'prime KR from third module fo bacillaene synthase",
	 AAseq: `AKLJGFNSMRTORGGBGFBGFNGGGGFGDYUERERWETREWDFGBDFGBDFBGBGFDBDFBDFBGBDGFBGDBDFGBDGBGDBDGBGFBFDBGFDBDGBDFBGFDBFG`,
	 pdbcode: "4kty"
	},

	{
	 protein: "BaeKR5",
	 description: "A'prime KR from third module fo bacillaene synthase",
	 AAseq: `AKLJGFNSMRTORGGBGFBGFNGGGGFGDYUERERWETREWDFGBDFGBDFBGBGFDBDFBDFBGBDGFBGDBDFGBDGBGDBDGBGFBFDBGFDBDGBDFBGFDBFG`,
	 pdbcode: "4kty"
	}
	
];

console.log(proteins[1].protein);

var express = require("express");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}' - $(JSON.stingify{(req.body)}`);
	next();
});

app.use(express.static("./public"));

app.use(cors());

app.get("/proteins-api", function(req, res) {
	res.json(proteins)
});

app.post("/proteins-api", function(req, res){
	proteins.push(req.body);
	res.json(proteins);
});

app.delete("/proteins-api/:protein", function(req, res){
	proteins.filter(function(prot) {
		return prot.protein.toLowerCase() !== req.params.protein.toLowerCase();
	});
	return res.json(proteins);
});


app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;