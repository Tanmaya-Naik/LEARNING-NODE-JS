function currDate(){
    return new Date().toTimeString();
}

function currYear(){
    return new Date().getFullYear();
}

module.exports ={
    currDate,
    currYear
}

console.log(module)