function fetchStudentdata(id,callback){
    setTimeout(() =>{
        console.log("Fetching data from the database...")
        callback({
            id:id,
            name:"Tanu",
            e_num:500,
        })
    },3000);


}

function getResult(enr,callback){
    setTimeout(() => {
        console.log("Feted");
        callback ({resultId:enr, percentaage: 90})

    },3000)
    
}

console.log("Start");


const printst= (students) => {
        console.log("Students",students);
        getResult(students.e_num, printresult )
    }

    const printresult= (result) => {
            console.log("Result",result);

        }
    

    
    fetchStudentdata(1, printst);
    
    console.log("End");


