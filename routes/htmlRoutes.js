/////////////////////////// Dependensices /////////////////////////////
const path = require('path');
const router = require('express').Router();


/////////////////////////// Routes using GET /////////////////////////////
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});




/////////////////////////// Exporting files /////////////////////////////
module.exports = router;