var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var electronics_controller = require('../controllers/electronics'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// electronicss ROUTES /// 
 
// POST request for creating a electronicss.  
router.post('/electronics', electronics_controller.electronics_create_post); 
 
// DELETE request to delete electronicss. 
router.delete('/electronics/:id', electronics_controller.electronics_delete); 
 
// PUT request to update electronicss. 
router.put('/electronics/:id', electronics_controller.electronics_update_put); 
 
// GET request for one electronicss. 
router.get('/electronics/:id', electronics_controller.electronics_detail); 
 
// GET request for list of all electronicss items. 
router.get('/electronics', electronics_controller.electronics_list); 

 /* GET detail costume page */ 
router.get('/detail', electronics_controller.electronics_view_one_Page); 
 
module.exports = router;

/* GET create electronics page */ 
router.get('/create', electronics_controller.electronics_create_Page); 

/* GET create update page */ 
router.get('/update', electronics_controller.electronics_update_Page); 

/* GET delete electronics page */ 
router.get('/delete', electronics_controller.electronics_delete_Page);