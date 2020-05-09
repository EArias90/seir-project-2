const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

///////////////////
/////Routes
///////////////////


//=================
//Index
///=================
    router.get('/', (req, res) => {
    // Model to view all Users
    User.find({}, (error, allUsers) => {
        res.render('Index', {
            users: allUsers
        })
    });
});

//=================
//New
///=================

router.get('/new', (req, res) => {
    res.render('New');
});


//=================
//Create
///=================

router.post('/', (req, res) => {
    console.log(req.body);
    // Model to create New Entry Document
    User.create(req.body, (error, newEntry) => {
        // Once created - respond to client
        res.redirect('/user');
    });
});


//=================
//Show
///=================

router.get('/:id', (req, res) => {
    // Find the specific document
    User.findById(req.params.id, (error, founduser) => {
        res.render('Show', {
            user: founduser
        });
    });
});


//=================
//Delete
///=================


router.delete('/:id', (req, res) => {
    // Delete document from collection
    User.findByIdAndRemove(req.params.id, (err, user) => {
        res.redirect('/user');
    });
});

//=================
//Edit
///=================


router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    User.findById(req.params.id, (err, founduser) => {
        res.render('Edit', {
            user: founduser
        })
    });
});



//=================
//Put
///=================

router.put('/:id', (req, res) => {
    // Update document using model
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/user');
    });
});


// export router
module.exports = router;