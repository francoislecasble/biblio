var express = require('express');
var router = express.Router();
var livre_controller=require('../controllers/livre_controller');
router.get('/', livre_controller.listeLivre);

/*router.get('/id', function(req, res){
    res.render('livre/id');
})*/



module.exports = router;