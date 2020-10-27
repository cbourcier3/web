

const express = require('express');
const app = express();
const port = 3000;


var nom, prenom, age, sexe;

app.use('/', express.static('www'));
//app.use('/index.html', express.static('www'));

app.get('/reponse', (req,res) => {
    nom = req.query.nom;
    age = req.query.age;
    prenom = req.query.prenom;
    if (req.query.genderm='on')
        sexe = 'homme';
    else if (req.query.genderf='on')
        sexe = 'femme';
    else sexe = 'n/a';
    console.log(nom + prenom + age + sexe);
    res.send("Données correctement envoyées");
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})

