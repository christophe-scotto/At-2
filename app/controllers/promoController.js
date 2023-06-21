const { request, response } = require('express');
const pool = require('../pgConnect.js');

const getPromoList = (request, response) => {
    // Requête SQL pour obtenir toutes les promos
    const query = 'SELECT * FROM Promo';

    pool.query(query, (error, results) => {
        if(error) {
            console.error('Erreur lors de l\'exécution de la requête :', error);
            response.status(500).send('Erreur serveur');
          } else {
            const promos = results.rows;
            response.render('promo-list', { promos }); // Rendu de la page avec la liste des promos
          }
        });
      };
      
      module.exports = {
        getPromoList,
      };