var db = require('../database/db.js')


exports.listeExemplaire=function (req, res, next){

    const query = {
        name: 'fetch-all-exemplaire',
        text: 'SELECT * FROM exemplaire',
    };

    db.get().query(query,
        function(err, result){
            if (err){
                res.send('ERROR');
            }
            else{

                res.render('exemplaire',{ listeExemplaires : result });

            }
        }
    );}
