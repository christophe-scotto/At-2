const { request, response } = require('express');
const pool = require('../pgConnect.js');

const getPromo = (request, response) => {
    // je recupere l'Id de la promo
    const promoId = request.params.id;
   

    // Requête SQL pour obtenir toutes les promos
    const query = `SELECT * FROM Student WHERE promo_id = ${promoId}`;

    pool.query(query, (error, results) => {
        if(error) {
            console.error('Erreur lors de l\'exécution de la requête :', error);
            response.status(500).send('Erreur serveur');
          } else {
            const students = results.rows;
            response.render('studentList', { students, promoId }); // Rendu de la page avec la liste des étudiants
          }
        });
      };
      
      module.exports = {
        getPromo,
      };