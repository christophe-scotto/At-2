// on require le package express
const express = require('express');

// je require mes controllers
const mainController = require('./controllers/mainController.js');
const promoController = require('./controllers/promoController.js')
const studentController = require('./controllers/studentController.js');
const addStudentController = require('./controllers/addStudentController.js');

// on crée notre routeur
const router = express.Router();

// ici j'utilise la méthode getHomePage que j'ai créé dans mon controlleur et qui s'occupe de render la page
router.get('/', mainController.getHomePage);

// route pour la page de la liste des promos
router.get('/promos', promoController.getPromoList);

// route pour la page de détail d'une promo
router.get('/promos/:id', studentController.getPromo);

// route pour la liste des etudiants d'une promo
//router.get('/promos/students/:id', promoController.getPromoStudents);

//route pour ajouter un etudiant
router.post('/promos/:id/addStudent', addStudentController.addStudent);

// on n'oublie pas d'exporter le module (= le rendre dispo aux autre modules, aux autres fichiers)
module.exports = router