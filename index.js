
import express from 'express'
import { use } from 'react'

const app = express()
const PORT = 5500

app.use(express.json())

let user = []

app.get("/user", (req,res) => {
    console.log("request -->", req)

    res.status(200).json({
        status: "true",
        data: user
    })
})

app.post("/user", (req,res) => {
    console.log("request -->", req.body)

    res.status(200).json({
        status : "true",
        massage : "user added successfully"
    })
})

app.put("/user/:username",(req,res) => {

    const data = req.body
    const {username} = req.params

    users = users.map((user) => {
        if(user.username == user.body){
            return user = body
        }
        return user
    })

//    if( user.push(data)){

//    }
//    if(!data){
//     return res.status(400).json({
//         status : "false",
//         massage: "same problem"
        
//     })
//    }
    res.status(200).json({
        status : "true",
        massage : "user edit successfully"
    })
})

app.delete("/user", (req,res) => {

    const {username} = req.params
    users = users.filter((user) => user.username != username)
     
    return user
    res.status(200).json({
        status : "true",
        massage : "user deleted successfully"
    })
})

// single user

app.get("/user/:username" , (req,res) => {

    const {username} = req.param

    let finUsers = users.find((user) => {
        if(user.username == username){
           return user
        }
        
    })
    res.status(200).json({
        status: "ture",
        massage : "single user data",
        data: findUsers
    })
})


app.listen(PORT ,() => {
   console.log("server is listening on port");
   
})


















// let username = 'umair';

// console.log(username);

// const fs = require("fs")

// fs.writeFile("./server.txt", "han jani kese hu kuch batao apne bare ma...", "utf-8", (err, data) => {
//     if (err) {
//         console.log("error agaya");

//     }
//     console.log("kam hu gaya");

// })
// console.log("kam hu gaya ..!")


//  let readFile = fs.readFileSync("./text.txt", "utf-8" , (err, data) => {
//     console.log(data)
//  })
//  console.log(readFile)



// const fs = require("fs")

// let read = fs.readFileSync("./text.txt","utf-8")

// console.log(read)



// const fs = require("fs")

// let write = fs.writeFileSync("./text.txt","hn bhai kese hu","utf-8")

// console.log("hu gaya kam")


// const fs = require("fs")

// let server = fs.writeFileSync("./server.js","server ban gaya","utf-8")


// console.log("server bana diya");






