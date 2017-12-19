var express = require('express');
var router = express.Router();
var exemplaire_controller=require('../controllers/exemplaire_controller');
router.get('/livre/exemplaire', exemplaire_controller.listeExemplaire);

/*router.get('/id', function(req, res){
    res.render('livre/id');
})*/



module.exports = router;