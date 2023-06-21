
//package express
const express = require('express');
const bodyParser = require('body-parser');

//mise en place d'un acces securisé aves CORS
const cors = require('cors');


// je require mes controllers
const mainController = require('./app/controllers/mainController');



//express router
const router = require('./app/router')

const app = express();

// Configurer body-parser pour analyser les données du formulaire
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const port = process.env.PORT || 5000;

//définition du ou des domaines autorisés
app.use(cors({
  origin: 'http://localhost:3000'
}));

// Middleware de gestion des erreurs de CORS
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(403).json({ message: 'Accès refusé en raison des restrictions CORS.' });
  } else {
    next();
  }
});

// ici on configure express pour lui indiquer quel moteur de rendu (=view engine) on utilise pour notre app
// pas besoin de require ejs, Express se débrouille
app.set('view engine', 'ejs');

// on précise aussi où se trouvent nos vues
// __dirname = récupère le chemin du dossier courant
app.set('views', __dirname + '/app/views');

// on configure encore express pour lui indiquer ou se trouvent nos fichiers statiques
app.use(express.static(__dirname + '/public'));


// on utilise le routeur qu'on a configuré dans le fichier router.js
// app.use accepte en paramètre une fonction (router est bien une fonction)
app.use(router);



router.get('/', mainController.getHomePage);

app.listen(port, () => {
  console.log(`Server is running on http://${process.env.DB_HOST}:${port}`);
});