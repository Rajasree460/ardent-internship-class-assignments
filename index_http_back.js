const http = require('http')


const server = http.createServer(function(req,res){
    res.write("Hello From Node.js Server")
    res.end()
})


server.listen(8000, () =>{
    console.log("Server Running On Port Number 8000")
})


const http = require('http')


// const server = http.createServer(function(req,res){
//     if(req.url == '/'){
//         res.write("Hello From Home Page")
//         res.end()
//     }else if(req.url == '/about' || req.url == '/About'){
//         res.write("Hello From About Page")
//         res.end()
//     }else{
//         res.write("<h1>Error 404</h1>")
//         res.end()
//     }
// })


// server.listen(8000, () =>{
//     console.log("Server Running On Port Number 8000")
// })
