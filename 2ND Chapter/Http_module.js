//HTTP MODULE ALLOW US TO CREATE HTTP SERVER & AND FOR HANDLING HTTP REQUREST
const http=require("http");

const SERVER=http.createServer((req,res) => {
    if(req.url ==='/'){
       res.write("Hello world");
    }
    else if(req.url === "/about"){
        res.write("This is the about route");
    }
    else{
        res.write("Route not found");
    }
    res.end();
});

SERVER.listen(5000,() => {
    console.log("Server start listing in port 5000");
});


//FOR BIG BACKEND CODE WE  HAVE TO WRITE TOO MANY THIS TYPE OF CODE SO IN REAL WORLD
//WE USE A THIRD PARTY MODULE CALLED EXPRESS.JS 

//IN EXPRESS WE CAN DIVIDE OUR ROUTES 

