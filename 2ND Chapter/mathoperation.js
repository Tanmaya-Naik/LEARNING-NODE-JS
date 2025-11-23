const name="Tanu baby";

function add(a,b){
    return a+b;
}

//IN NODE JS ALL FILE HAVE A OBJECT MODULE OBJECT WHICH GIVES US THE INFO ABOUT IT

function multiply(a,b){
    return a*b;
}

// module.exports.addNUM=add;
// module.exports.MULTY=multiply;
// module.exports.name=name;

//Write the above code in object
module.exports={
    add,
    multiply,
    name,
};
console.log(module);