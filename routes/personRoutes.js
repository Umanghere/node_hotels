const express = require('express');
const router = express.Router();
const person = require("./../models/person");

//POST route to add a person... Ye "person add" krne k liye h.
router.post("/", async(req, res) => {
    try {
        const data = req.body;
        //Create a new Person document using the Mongoose model
        const newPerson = new person(data);

        //save the new data in database
        const savedPerson = await newPerson.save();
        console.log("Data Saved || Hell Yeah");
        res.status(200).json(savedPerson)
    }
    catch (error) {
        console.log("Error Saving Data: ", error);
        res.status(500).json({error: "Internal Server Error"})
    }
});

//GET method to get a person... Ye print krane k liye h.
router.get('/', async(req, res)=>{
    try{
        const data = await person.find();
        console.log("Data Fetched for persons");
        res.status(200).json(data)
    }
    catch(error){
        console.log("Error Fetching Data: ", error);
        res.status(500).json({error: "Internal Server Error"})
    }
})

//workType is just a variable. We can name it anything... Ye specific (e.g, work) node k liye h.
router.get("/:workType", async(req, res)=>{
    try {
        //We are storing the data sending by user in "const workType" from "workType- jo variable wala bnaya h upr."
        const workType = req.params.workType;  
        //Applying Validation on workType
        if (workType == "chef" || workType == "manager" || workType == "worker") {
            const response = await person.find({work: workType});
            console.log("Response Fetched for workType:", workType);
            res.status(200).json(response); 
        } 
        else {
            console.log("Invalid workType received: ", workType);
            res.status(400).json({error: "Internal WorkType"})
        }
    } catch (error) {
        console.log("Error Fetching Data: ", error);
        res.status(500).json({error: "Internal Server Error"})
    }
})

router.put('/:id', async(req, res) => {
    try {
        const personID = req.params.id; //Extract the ID from URL Parameter
        const updatedPersonData = req.body;  //Update data from the Person

        const response = await person.findByIdAndUpdate(personID, updatedPersonData, {
            new: true,  //Return the updated document
            runValidators: true,  //Run mongoose validation
        })

        if(!response){
            return res.status(404).json({error: "Person not found"})
        }

        console.log("Data Updated Successfully in Person");
        res.status(200).json(response)
    } 
    catch (error) {
        console.log("Error Fetching Data: ", error);
        res.status(500).json({error: "Internal Server Error"})
    }
})

module.exports = router;