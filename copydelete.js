const fs= require("fs");


fs.copyFile("../testing.txt","copied.txt", (err)=>
{
    if(err){
        console.log("error")
        return;
    }
    console.log("File Copyed")
})
try{
fs.readFileSync("copied.txt","utf-8")
console.log("file is copied")
}
catch(err){
    console.log("error while copying file")
}
fs.unlink("newfile.txt",(err)=>{
    if(err){
        console.log("error while deleting file")
        return;
    }
    console.log("file deleted")
})
fs.writeFile("newfile.txt","this is new file",(err)=>{
    if(err){
        console.log("error while writing file")
        return;
    }
    console.log ("file is created")
})

fs.mkdir("folders/folder1/folder2",(err)=>{
    if(err){
        console.log("")
        return
    }
    console.log("Directory is created")
})

fs.readdir("file.handling",(err,files)=>{
    if(err){
        console.log("")
    }
    console.log ("files")
})