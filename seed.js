/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

var start = process.hrtime();
var elapsed_time = function(note) {
    var precision = 3; // 3 decimal places
    var elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
    console.log(process.hrtime(start)[0] + " s, " + elapsed.toFixed(precision) + " ms - " + note); // print message + time
    start = process.hrtime(); // reset the timer
}

var chalk = require('chalk');
var rp = require('request-promise');
var db = require('./db');
var User = db.model('user');
var Promise = require('bluebird');
var _ = require('lodash');

var seedUsers = function() {

    var users = [{
        email: 'testing@fsa.com',
        password: 'password',
        first_name: 'Testy',
        last_name: 'McTesterson',
        company: 'Fullstack Academy'
    }, {
        email: 'obama@gmail.com',
        password: 'potus',
        first_name: 'Barack',
        last_name: 'Obama',
        company: 'The United States Government'
    }, {
        email: 'tammy@penmon.com',
        password: '1234567890',
        first_name: 'Tammy',
        last_name: 'Chu',
        company: 'Penmon'
    }, {
        email: 'ctheller12@gmail.com',
        password: 'wow',
        first_name: 'Chris',
        last_name: 'Heller',
        company: 'Penmon'
    }];

    return Promise.map(users, function(userObj) {
        return User.create(userObj);
    });

};


db.sync({force:true})
    .catch(function(err) {
        console.error(err);
    });
