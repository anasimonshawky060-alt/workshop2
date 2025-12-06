/*1
const path = require ('path')
const myPath = 'E:/My-Project/Route/backend/ass2.js'
console.log(__filename);
console.log(__dirname);

2
const path = require ('path')
const myPath = 'E:/My-Project/Route/backend/ass2.js'
console.log(path.basename(myPath));

3
const path = require ('path')
const myPath = 'E:/My-Project/Route/backend/ass2.js'
const formatedPath ={
  root: 'E:/',
  dir: 'E:/My-Project/Route/backend',
  base: 'ass2.js',
  ext: '.js',
  name: 'ass2'
}
console.log(path.format(formatedPath));

4
const path = require ('path')
const myPath = 'E:/My-Project/Route/backend/ass2.js'
console.log(path.extname(myPath));

5
const path = require ('path')
const myPath = 'E:/My-Project/Route/backend/ass2.js'
console.log(path.parse(myPath));

6
const path = require ('path')
const myPath = 'E:/My-Project/Route/backend/ass2.js'
console.log(path.isAbsolute(myPath));

7
const path = require ('path')
const myPath = 'E:/My-Project/Route/backend/ass2.js'
from = './Route/backend'
to = './ass2.js'
console.log(path.join(from , to));

8
const path = require ('path')
const myPath = './backend/ass2.js'
const formatedPath ={
  root: '',
  dir: './backend',
   base: 'ass2.js',
  ext: '.js',
  name: 'ass2'
}
console.log(path.resolve('./backend/ass2.js'));

9
const path = require ('path')
const myPath ='./Route/backend/ass2.js'
from = './Route'
to = './backend/ass2.js'
console.log(path.join(myPath));*/

///////////////////////////////////////////////////////////////////
const fs = require ('fs');
 fs.readFile("data.json", ((err , data)=> {
if (err) console.log(err);
    console.log(JSON.parse(data));   
}
 ))

/*11
const { log } = require('console');
const fs = require ('fs')
function createFolderSync(newFolder) {
   try { 
         fs.mkdirSync(newFolder);
        return "success"
    
}catch (err){
        return "err"        
} }
console.log(createFolderSync("newFolder"));

12
const {EventEmitter} =require ('events')
const events = new EventEmitter ()
events.on("start" , (msg)=> {
    console.log(msg);
})
events.emit("start" , "Welcome event triggered!")

13
const {EventEmitter} =require ('events')
const events = new EventEmitter ()
const custom = (name)=>{
    console.log(`User logged in : ${name}`);
}
events.on("login", custom)
events.emit ("login" , "anasimon")

14*/
// const fs = require ('fs'); 
// function text (path , content){
//     fs.writeFile(path , content , "utf8" , (err)=>{
//         if (err){
//             console.log(err);
//         }else {
//     console.log("Done");
//  } })}
// text("./notes.txt" ,"this is a note" )

 /*15
 const fs = require ('fs');
    fs.writeFileSync('./notes.txt' , "Async save");
    console.log('done');



16
const fs = require ('fs');
function checkDirectoryExists (Path){
    return fs.existsSync(Path);
}
console.log(checkDirectoryExists("./notes.txt"));*/


/*17
function getSystemInfo(){
    const os = require('node:os');
    return{
        Platform: os.platform(),
        arch :os.arch()
    };
}
console.log(getSystemInfo());*/
