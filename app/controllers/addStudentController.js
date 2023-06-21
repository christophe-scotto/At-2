const pool = require('../pgConnect.js');

const addStudent = (request, response) => {
    // Récupérer les données du nouvel étudiant depuis la requête
    const { first_name, last_name, github_username } = request.body;
    // Récupérer l'ID de la promo
    const promoId = request.params.id;
    console.log(request.body)

    // Requête SQL pour ajouter un nouvel étudiant à la base de données
    const INSERT = `INSERT INTO Student (first_name, last_name, github_username, promo_id) VALUES ($1, $2, $3, $4)`;
    const values = [first_name, last_name, github_username, promoId];

    pool.query(INSERT, values, (error, result) => {
        if (error) {
            console.error('Erreur lors de l\'exécution de la requête :', error);
            response.status(500).send('Erreur serveur');
        } else {
            response.redirect(`/promos/${promoId}`);
        }
    });
};

module.exports = {
    addStudent,
};
