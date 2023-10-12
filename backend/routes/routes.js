const express = require('express');
const Model = require('../models/model');

const router = express.Router();

//Post Method
router.post('/create', async (req, res) => {
    const data = new Model({
        name: req.body.name
    });

    try {
        await data.save();
        const items = await Model.find();
        res.status(200).json(items);
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
})

//Get all Method
router.get('/get', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.post('/remove', async (req, res) => {
    try {
        const id = req.body.id;
        await Model.findByIdAndDelete(id);
        const items = await Model.find();
        res.status(200).json(items);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

module.exports = router;