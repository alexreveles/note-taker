/////////////////////////// Dependensices /////////////////////////////
const router = require('express').Router();
const fs = require('fs');
const util = require('util');
const db = require('../db/db.json')

//////////////////////////  npm id package ///////////////////////////
const { v4: uuid } = require("uuid");

/////////////////////////// Routes using GET /////////////////////////////
router.get('/notes', (req, res) => {
    
    const notes = fs.readFileSync('./db/db.json', 'utf-8');
    res.json(JSON.parse(notes))
});




/////////////////////////// Routes using POST /////////////////////////////
router.post('/notes', (req, res) => {
    req.body.id = uuid('');
    const newNote = req.body;
    console.log(newNote);
    db.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(db));
    res.json(newNote);

});


/////////////////////////// Delete Function for notes  /////////////////////////////
// router.delete('/notes/:id', (req, res) => {
    
// });
/////////////////////////// Exporting files /////////////////////////////
module.exports = router;

