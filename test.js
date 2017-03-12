'use strict';

const test = require('tape');
const emoji = require('./');

test(function( t ){
	t.equal(emoji('DK'), '🇩🇰');
	t.equal(emoji('GB'), '🇬🇧');

	t.throws(function(){
		emoji('aa');
	});

	t.throws(function(){
		emoji('DKK');
	});

	t.throws(function(){
		emoji();
	});

	t.end();
});
