var db = require('../database/db.js')


exports.listeLivre=function (req, res, next){

    const query = {
        name: 'fetch-all-livre',
        text: 'SELECT * FROM livre',
    };

    db.get().query(query,
        function(err, result){
            if (err){
                res.send('ERROR');
            }
            else{

                res.render('livre',{ listeLivres : result });

            }
        }
    );









};



