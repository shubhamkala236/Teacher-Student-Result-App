//express server access
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

//json server access
// const jsonServer = require('json-server');
// const router = jsonServer.router('db.json');

//middlewares
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

const serverJson = 'http://localhost:3000'; 

//Express API's

//-----------------------GET ALL STUDENTs RESULT ----------------------------
app.get('/alldata',async(req,res)=>{
    try{
        const response = await axios.get(`${serverJson}/allResults`);
        const students = response.data;
        res.json(students);
    }
    catch(error)
    {
        res.status(500).json({error:'Error while fetching students'});
    }
})

//-----------------------GET SINGLE STUDENTs RESULT ----------------------------

//Get by roll no 
app.get('/alldata/:rollNo/:name',async(req,res)=>{
    const userRollNo = req.params.rollNo;
    const name = req.params.name;

    try {
        // const response = await axios.get(`http://localhost:3000/allResults?Rollno=${userRollNo}`);
        const response = await axios.get(`http://localhost:3000/allResults?Rollno=${userRollNo}&Name=${name}`);
        const student = response.data;
        res.json(student);
        
    } catch (error) {
        console.log("Error");
        res.status(500).json({error:'Error while fetching students with Roll no'});
    }

});
//-----------------------Post Create Student Result ----------------------------
app.post('/create-result',async(req,res)=>{
    try {
        const newResult = req.body;
        //If user with same roll no already exists
        const getExistingUser = await axios.get(`${serverJson}/allResults?Rollno=${newResult.Rollno}`);
        const existingUser = getExistingUser.data[0];

        if(existingUser)
        {
            res.status(400).json({error:'User with same rollno already exists'});
        }
        else
        {
            const response = await axios.post(`${serverJson}/allResults`,newResult);
            const result = response.data;
            res.status(201).json(result);
        }

    } catch (error) {
        res.status(500).json({error:'Error while creating Student result'});
    }
});


//-----------------------Update Student RESULT ----------------------------
app.put('/update-result/:id',async(req,res)=>{
    try {
        const userId = req.params.id;
        const updatedResult = req.body;
        const response = await axios.put(`http://localhost:3000/allResults/${userId}`,updatedResult);
        const student = response.data;
        res.json(student);

    } catch (error) {
        res.status(500).json({error:'Error while Updating Student result'});

    }
})

//-----------------------Delete Student RESULT ----------------------------
app.delete('/delete-result/:id',async(req,res)=>{
    try {
        const userId = req.params.id;
        const response = await axios.delete(`http://localhost:3000/allResults/${userId}`);
        const student = response.data;
        res.json(student);
    } catch (error) {
        res.status(500).json({error:'Error while Deleting Student result'});
    }
})



//Port
app.listen(5000,()=>{
    console.log('Express Server on port 5000');
});
