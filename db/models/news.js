'use strict';
var Sequelize = require('sequelize');

var db = require('../_db');

module.exports = db.define('news', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        defaultValue: function() {
            return "No Title";
        }
    },
    source: {
        type: Sequelize.TEXT
    },
    date: {
        type: Sequelize.TEXT
    },
    link: {
        type: Sequelize.STRING
    },
    type: {
        type: Sequelize.STRING
    }, 
    keyword: {
        type: Sequelize.TEXT
    }
});
