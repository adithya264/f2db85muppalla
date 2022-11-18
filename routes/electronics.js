var express = require('express');
var electronics_controller = require('../controllers/electronics');
var router = express.Router();



// /* GET home page. */

// router.get('/', function(req, res, next) {

//   res.render('electronics', { title: 'Search Results for electronics Class' });

// });



/* GET electronics */

router.get('/', electronics_controller.electronics_view_all_Page );



// GET request for one electronics.

router.get('/electronicss/:id', electronics_controller.electronics_detail);



/* GET detail electronics page */

router.get('/detail', electronics_controller.electronics_view_one_Page);



/* GET create electronics page */

router.get('/create', electronics_controller.electronics_create_Page);



/* GET create update page */

router.get('/update', electronics_controller.electronics_update_Page);



/* GET delete electronics page */

router.get('/delete', electronics_controller.electronics_delete_Page);



module.exports = router;