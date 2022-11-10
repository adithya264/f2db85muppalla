var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var electronics_controller = require('../controllers/electronics');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// electronics ROUTES ///
// POST request for creating a electronics.  
router.post('/electronicss', electronics_controller.electronics_create_post);
// DELETE request to delete electronics.
router.delete('/electronicss/:id', electronics_controller.electronics_delete);
// PUT request to update electronics.
router.put('/electronicss/:id', electronics_controller.electronics_update_put);
// GET request for one electronics.
router.get('/electronicss/:id', electronics_controller.electronics_detail);
// GET request for list of all electronics items.
router.get('/electronicss', electronics_controller.electronics_list);
module.exports = router;