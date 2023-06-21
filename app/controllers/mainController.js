const { request, response } = require("express");

const mainController = {
    getHomePage: (request, response) => {
        response.render('home');
    }
}

module.exports = mainController;