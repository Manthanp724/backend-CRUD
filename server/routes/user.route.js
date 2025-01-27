const express = require('express');
const mongoose = require('mongoose');
const User = require('../Models/user.model.js');


const router = express.Router()




// Create Request Posting data to the database
router.post("/" , async (req, res) => {
    const {name , email, age} = req.body
    

    try {
        const userAdded = await User.create( {
            name : name,
            email : email,
            age : age
        })
        res.status(201).json(userAdded)
    } catch (error) {
        res.status(401).json({error : error.message})
        console.log(error);
    }  
})

//  Read - Getting all user Data from the Database

router.get("/" ,async (req , res) => {

    try {
        const showUser = await User.find()
        res.status(200).json(showUser)
    } catch (error) {
        res.status(401).json({error : error.message})
        console.log(error); 
    }
})

// getting single user data from the database
router.get("/:id" ,async (req , res) => {

    try {
        const {id} = req.params
        const singleUser = await User.find({_id : id})
        res.status(200).json(singleUser)
    } catch (error) {
        res.status(401).json({error : error.message})
        console.log(error); 
    }
})

// Detele user Data from the database

router.delete("/:id" ,async (req , res) => {

    try {
        const {id} = req.params
        const singleUser = await User.findByIdAndDelete({_id : id})
        res.status(200).json(singleUser)
    } catch (error) {
        res.status(401).json({error : error.message})
        console.log(error); 
    }
})

// Update user data from the databse

router.patch("/:id" ,async (req , res) => {

    try {
        const {id} = req.params
        const {name , email , age} = req.body
        const updateUser = await User.findByIdAndUpdate(id , req.body , {new:true})
        res.status(200).json(updateUser)
    } catch (error) {
        res.status(401).json({error : error.message})
        console.log(error); 
    }
})






module.exports = router
