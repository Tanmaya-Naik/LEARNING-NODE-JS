const fs=require("fs");

//fs module has lots of methods out of some are synchronous means blocking method and some are async method


//SYNCHROUNUS WAY TO PRINT THE CURR DIR 

const data=fs.readdirSync('./');
console.log(data);

//ASYNCHROUNUS WAY TO PRINT THE CURR DIR 
fs.readdir('./',(err,data) => {
    if(err) {
        console.log(err);
    }
    else{
        console.log(data);
    }
})