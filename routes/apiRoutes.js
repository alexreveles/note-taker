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
    let latestNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
    req.body.id = uuid('');
    const newNote = req.body;
    console.log(newNote);
    latestNotes.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(latestNotes, null, 2));
    res.json(newNote);

});


/////////////////////////// Delete Function for notes  /////////////////////////////
router.delete('/notes/:id', (req, res) => {
    const deleteNote = req.params.id;
    console.log('deleting', deleteNote);

    let latestNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'));
    console.log(typeof latestNotes);

    let filterNotes = latestNotes.filter(note => {
        // console.log(note.id);
        return note.id !== deleteNote;
    });
    // console.log(filterNotes);
    
    fs.writeFileSync('./db/db.json', JSON.stringify(filterNotes, null, 2));
    res.status(200).end();
    
});

/////////////////////////// Exporting files /////////////////////////////
module.exports = router;



