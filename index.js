// const fs = require ('fs');
// let stream= fs.createReadStream('./notes.html',{
//     highWaterMark :64 *1024
// })
// stream.on("data", (x)=> {
//     console.log(x);
//     console.log(x.length);

//     console.log("**************************************");

// //     setTimeout(()=>{
// //         stream.pause()
// //     },3000)
// //     setTimeout(()=>{
// //         stream.resume()
// //     },6000)
//  })

// stream.on('end', ()=> {
//     console.log('data transfred successfully');
// })

// stream.on('error', (err)=>{
//     console.log('err');

// })
const http = require("http");
const server = http.createServer((req, res) => {
  let { url, method } = req;
  if (url == "/signup" && method == "POST") {
    res.write("hello from signup");
    res.end();
  } else if (url == "/signup" && method == "GET") {
    const stream = fs.createReadStream("./notes.html", {
      highWaterMark: 8,
    });
    stream.on("data", (x) => {
      console.log(x);
    });
    stream.on("end", () => {
      console.log("end");
    });
    stream.pipe(res);// searchhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
  } else if (url == "/update" && method == "PUT") {
    res.write("hello from update");
    res.end();
  } else if (url == "/delete" && method == "DELETE") {
    res.write("hello from delete");
    res.end();
  } else {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("route not found");
    res.end();
  }
});
server.listen(3000, () => {
  console.log("server running");
});
const fs = require("fs");
