const express = require('express')

const app = express() //serverin baslama noqtesi

app.get('/', (req, res) => {
    res.send("Server response on / route")
})

app.get('/user/:id', function (req, res) {
   const arr=[{id:1,product:'smartphone',model:'Iphone14'},{id:2,product:'tablet',model:'Ipad7'},{id:3,product:'mouse',model:'Imouse'}];
   res.json(JSON.stringify(arr.find((user) => user.id == req.params.id)));

});

app.get('/user',(req,res)=>{
    let arr=[{id:1,product:'smartphone',model:'Iphone14'},{id:2,product:'tablet',model:'Ipad7'},{id:3,product:'mouse',model:'Imouse'}];
    res.json(arr)
})

// app.get('/employees', (req, res) => {
//     let array = [
//         {
//             id: 1,
//             age: 22,
//             name: "Jack"
//         },
//         {
//             id: 2,
//             age: 25,
//             name: "Anne"
//         },
//         {
//             id: 3,
//             age: 21,
//             name: "Dave"
//         }
//     ]
//     res.json(array)
// })

app.listen(3000, () => {
    console.log("Server started on 3000 port")
})