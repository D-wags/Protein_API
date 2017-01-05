var mongoose =  require('mongoose');

var Schema = mongoose.Schema;
var ProteinSchema = new Schema ({
	name: {},
	decription: {},
	aaseq: {}.
	pdbcode: {}
});

var Proteins = mongoose.model('Proteins', ProteinSchema);

module.exports = Proteins;