const express = require('express');
const router = express.Router();
var fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const { body, validationResult } = require('express-validator');

// Route 1 :get all notes using GET :"/api/notes/fetchallnotes"  login requierd
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        res.status(500).send("some error occured");
    }

})

// Route 2 :Add new notes using POST :"/api/notes/addnote" login required
router.get('/addnote', fetchuser, [
    body('title', 'Enter title').isLength({ min: 3 }),
    body('description', 'description must be atlist 5 character').isLength({ min: 5 })], async (req, res) => {

        try {
            const { title, description, tag } = req.body;
            const result = validationResult(req);
            if (!result.isEmpty()) {
                res.send({ errors: result.array() });
            }

            const note = new Note({
                title, description, tag, user: req.user.id
            })
            const saveNote = await note.save();
            res.json(saveNote);
        } 
        catch (error) {
            res.status(500).send("some error occured");

        }
    })

    // Route 3 :update existing notes using POST :"/api/notes/updatenote" login required
router.put('/updatenote/:id', fetchuser,  async (req, res) => {

        const {title,description,tag}=req.body;

        try {
        //create newnote object
        const newNote ={};
        if(title){newNote.title=title};
        if(description){newNote.description=description};
        if(tag){newNote.tag=tag};

        //find note to be updated and update it
        let note = await Note.findById(req.params.id);
        if(!note){return res.status(400).send("Not found")};
        
        if(note.user.toString() !== req.user.id)
            {
               return res.status(401).send("Not allowed");
            }
            note = await Note.findByIdAndUpdate(req.params.id,{$set :newNote},{new:true})
            res.json({note});
        } 
        catch (error) {
            res.status(500).send("some error occured");

        }
    })   

    // Route 4 :delete existing notes using DELETE :"/api/notes/deletenote" login required
router.delete('/deletenote/:id', fetchuser,  async (req, res) => {

        try {
    //find note to be delete and delete it
    let note = await Note.findById(req.params.id);
    if(!note){return res.status(404).send("Not found")};
    
    //allow deletion only if user owns this note
    if(note.user.toString() !== req.user.id)
        {
           return res.status(401).send("Not allowed");
        }
        note = await Note.findByIdAndDelete(req.params.id)
        res.json({"Success" : "Note has been deleted",note:note});

    } 
    catch (error) {
        res.status(500).send("some error occured");

    }
})   
module.exports = router