var electronics = require('../models/electronics');
// List of all electronicss
exports.electronics_list = function(req, res) {
    res.send('NOT IMPLEMENTED: electronics list');
};
// for a specific electronics.
exports.electronics_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: electronics detail: ' + req.params.id);
};
// Handle electronics create on POST.
exports.electronics_create_post = async function(req, res)
 {
    console.log(req.body)
    let document = new electronics();
    document.electronics_product = req.body.electronics_product;
    document.electronics_price = req.body.electronics_price;
    document.electronics_Size = req.body.electronics_Size;
   
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};
// Handle electronics delete form on DELETE.
exports.electronics_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: electronics delete DELETE ' + req.params.id);
};
// Handle electronics update form on PUT.
exports.electronics_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: electronics update PUT' + req.params.id);
};
exports.electronics_list = async function(req, res) {
    try{
        theelectronicss = await electronics.find();
        res.send(theelectronicss);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};
// VIEWS
// Handle a show all view
exports.electronics_view_all_Page = async function(req, res) {
    try{
        theelectronicss = await electronics.find();
        res.render('electronics', { title: 'electronics Search Results', results: theelectronicss });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};