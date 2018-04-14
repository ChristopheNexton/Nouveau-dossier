module.exports = function(app) {
    var express = require('express');

    /*
        app.get('/', (req, res) => {
            res.render(__dirname + '/views/index');
        });

        */

    app.get('/', (req, res) => {
        res.render(__dirname + '/views/send');
    });



};