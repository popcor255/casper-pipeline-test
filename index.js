var casper = require('casper').create({
	clientScripts: [ './injection.js' ]
});
casper.options.viewportSize = { width: 900, height: 900 };

//Change url to return to foobar
//accounts.google.com/signin/v2/identifier?service=ah&passive=true&continue=https%3A%2F%2Fappengine.google.com%2F_ah%2Fconflogin%3Fcontinue%3Dhttps%3A%2F%2Ffoobar.withgoogle.com%2Flogin%2F&flowName=GlifWebSignIn&flowEntry=ServiceLogin
var url = 'https://accounts.google.com/signin/v2/identifier?hl=en&passive=true&flowEntry=ServiceLogin';
//This is dummy data
var gmail = 'savemestupid@gmail.com';
var psw = 'SaveMeStupid1!';

casper.start(url, function() {
	this.echo('trying to login into google...');
	this.echo('entering gmail...');
	enterEmail();

	casper.wait(1750, function() {
		this.echo('waiting 1.75 seconds...');
		this.echo('entering password...');
		enterPassword();
	});

	casper.wait(1000, function() {
		this.echo('waiting 1 second...');
		casper.capture('screenshots/google-login-state.png');
	});
});

casper.then(function() {
	this.echo('completed script..');
});

casper.run();

function enterEmail() {
	casper.click('input#identifierId');
	casper.sendKeys('input#identifierId', gmail);
	casper.click('div#identifierNext');
	casper.capture('screenshots/google-login-email.png');
}

function enterPassword() {
	casper.sendKeys('div#password', psw);
	casper.click('div#passwordNext');
	casper.capture('screenshots/google-login-pass.png');
}
