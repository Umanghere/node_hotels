const express = require('express');
const router = express.Router();
const MenuItem = require("../models/MenuItem");

//POST route to add a menuItem
router.post("/", async(req, res) => {
    try {
        const data = req.body;
        //Create a new Person document using the Mongoose model
        const newMenuItem = new MenuItem(data);

        //save the new data in database
        const savedMenuItem = await newMenuItem.save();
        console.log("Data Saved || Hell Yeah");
        res.status(200).json(savedMenuItem)
    }
    catch (error) {
        console.log("Error Saving Data: ", error);
        res.status(500).json({error: "Internal Server Error"})
    }
});

//GET method to get a menuItem
router.get('/', async(req, res)=>{
    try{
        const data = await MenuItem.find();
        console.log("Data Fetched for MenuItems");
        res.status(200).json(data)
    }
    catch(error){
        console.log("Error Fetching Data: ", error);
        res.status(500).json({error: "Internal Server Error"})
    }
})

// tasteType is just a variable. We can name it anything.
router.get("/:tasteType", async(req, res)=>{
    try {
        //We are storing the data sending by user in "const tasteType" from "tasteType- jo variable wala bnaya h upr."
        const tasteType = req.params.tasteType;
        //Applying Validation on tasteType  
        if(tasteType == "sweet" || tasteType == "salty" || tasteType == "sour"){
            const respons = await MenuItem.find({taste: tasteType})
            console.log("Taste Fetched: ", tasteType);
            res.status(200).json(respons)
        }
        else{
            console.log("Invalid tasteType received: ", tasteType);
            res.status(400).json({error: "Internal WorkType"})
        }
    } catch (error) {
        console.log("Error Fetching Data: ", error);
        res.status(500).json({error: "Internal Server Error"})
    }
})

module.exports = router;