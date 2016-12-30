
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


app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}'`);
	next();
});

app.use(express.static("./public"));

app.get("/proteins-api", function(req, res) {
	res.json(proteins)
});


app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;