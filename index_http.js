const http = require('http')


const server = http.createServer(function(req,res){
    res.write("Hello From Node.js Server")
    res.end()
})


server.listen(8000, () =>{
    console.log("Server Running On Port Number 8000")
})
