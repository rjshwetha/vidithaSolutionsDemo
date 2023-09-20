// import cors from 'cors';
const express = require('express');
const cors = require('cors')
const app = express();
const createSeller  = require('./database/models/createSellers');
const createUser  = require('./database/models/createUser');

const mongoose = require('./database/mongoose');

app.use(express.json());
app.use(cors());
app.get('/createUser',(req,res)=>{
    createUser.find({})
    .then(createUser => res.send(createUser))
    .catch((error => {console.log(error)}))
});


app.post('/createUser',(req,res) =>{
    (new createUser({
        'userName':req.body.userName,
        'email':req.body.email,
        'phonenumber':req.body.phonenumber
    }))
    .save()
    .then((createUser) => res.send(createUser))
    .catch((error) => {console.log(error)})
});

app.get('/createUser/:id',(req,res)=>{
    createUser.find({
        "_id":req.params.id
    })
    .then(createUser => res.send(createUser))
    .catch((error => {console.log(error)}))

});

app.delete('/createUser/:id',(req,res) =>{
    createUser.findByIdAndDelete(req.params.id)
    .then(createUser => res.send(createUser))
    .catch((error => {console.log(error)}))
})

app.patch('/createUser/:id',(req,res)=>{
    createUser.findOneAndUpdate({"_id":req.params.id},{$set: req.body})
    .then(createUser => res.send(createUser))
    .catch((error => {console.log(error)}))

}
)
app.listen(8080, ()=>{
    console.log("server connect on port 8080");
})




