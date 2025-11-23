const os=require("os");
if(os.platform()==="win32"){
    console.log("Hello window user!Tanu");
}
else if(os.platform === "darwin"){
    console.log("Hellow user")
}

//win32 is the os used by window os and darwin is the sytem used by mac os


//USEFUL PROPERTIES OF OS MODULE

//WE CAN GET THE TOTAL MEMORY BY
console.log(os.totalmem());
console.log(os.freemem());