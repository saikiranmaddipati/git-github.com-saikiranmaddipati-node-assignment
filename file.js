const fs=require('fs');

fs.readFile('date.js',function(err,data){
    console.log(data);
})

fs.appendFile('./date.js',"Hello saikiran",function(err){
    if (err){
    console.log("saved");
    }
})