var electronics = require('../models/electronics');
// List of all electronicss
exports.electronics_list = function(req, res) {
    res.send('NOT IMPLEMENTED: electronics list');
};
// for a specific electronics.
exports.electronics_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await electronics.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// for a specific electronics.
exports.electronics_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await electronics.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
//Handle electronics update form on PUT.
exports.electronics_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await electronics.findById( req.params.id)
        // Do updates of properties
        if(req.body.electronics_product)
               toUpdate.electronics_product = req.body.electronics_product;
        if(req.body.electronics_price) toUpdate.electronics_price = req.body.electronics_price;
        if(req.body.electronics_Size) toUpdate.electronics_Size = req.body.electronics_Size;
        
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
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
// Handle Electronics delete on DELETE. 
exports.electronics_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await electronics.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
// Handle a show one view with id specified by query 
exports.electronics_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await electronics.findById( req.query.id) 
        res.render('electronicsdetail',  
{ title: 'electronics Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};
// Handle building the view for creating a electronics. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.electronics_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('electronicscreate', { title: 'electronics Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 
// Handle building the view for updating a electronics. 
// query provides the id 
exports.electronics_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await electronics.findById(req.query.id) 
        res.render('electronicsupdate', { title: 'electronics Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle a delete one view with id from query 
exports.electronics_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await electronics.findById(req.query.id) 
        res.render('electronicsdelete', { title: 'electronics Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};