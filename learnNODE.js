var path = require('path');

// console.log(process.argv);

function grab(flag) {
	var index = process.argv.indexOf(flag);
	return (index === -1) ? null : process.argv[index+1];
}

function ask(i) {
	process.stdout.write(`\n\n\n\n ${questions[i]}`);
	process.stdout.write(" > ");
}

var greeting = grab('--greeting');
var user = grab('--user');

if (!user || !greeting) {
	console.log("YOU BLEW IT!");
}
else {
	console.log(`Welcome ${user}, ${greeting}`);
}

var questions = [
	"What's up?",
	"Whats goin down?",
	"You got my money?"
];

var answers = [];

process.stdin.on('data', function(data) {
	answers.push(data.toString().trim());
	if (answers.length < questions.length) {
		ask(answers.length);
	}
	else {
		process.exit();
	}
});

process.on('exit', function() {
	process.stdout.write("\n\n\n\n\n\n");
	process.stdout.write(`Go ${answers[1]}`);
	process.stdout.write("\n\n\n\n\n\n");
});

ask(0);

