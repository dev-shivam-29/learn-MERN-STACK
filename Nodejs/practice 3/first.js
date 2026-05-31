// // // console.log("shivam");
// // // const fs = require("fs");
// // // fs.writeFile("shivam.txt", "writing file")
// // //creating  first node server
// // // const http = require ("http");
// // // function requestListener(req, res){
// // //    console.log("req");
// // // }

// // // http.createServer(requestListener);
// // // const http = require("http");

// // // function requestListener(req, res){
// // //    console.log("req");
// // //    res.end("Hello");
// // // }

// // // const server = http.createServer(requestListener);

// // // server.listen(3000);
// // // const http = require("http");

// // // function requestListener(req, res){
// // //    console.log("req");
// // //    res.end("Hello");
// // // }

// // // const server = http.createServer(requestListener);

// // // server.listen(3000, () => {
// // //    console.log("Server started");
// // // });
// // const http = require("http");
// // const server = http.createServer((req, res) => {
// //    console.log(req.url, req.method, req.headers);

// //    if (req.url==='/') {
// //       // process.exit();// stops event loop

// // //   res.end("hello");
// //    res.setHeader('content-type', 'text/html');
// //    res.write('<html>');
// //    res.write('<head><title>complete  coading</title></head>');
// //    res.write('<body><h1>welcome to Home</h1></body>');
// //    res.write('</html>');
// //    return res.end();

// // //    }else if (req.url === '/products') {
// // //       // process.exit();// stops event loop

// // // //   res.end("hello");
// // //    res.setHeader('content-type', 'text/html');
// // //    res.write('<html>');
// // //    res.write('<head><title>complete  coading</title></head>');
// // //    res.write('<body><h1>checkout our products</h1></body>');
// // //    res.write('</html>');
// // //    return res.end();
// // //    } else {
// //       // process.exit();// stops event loop

// // //   res.end("hello");
// //    res.setHeader('content-type', 'text/html');
// //    res.write('<html>');
// //    res.write('<head><title>complete  coading</title></head>');
// //    res.write('<body><h1>please select right pages  try again</h1></body>');
// //    res.write('</html>');
// //    res.end();
// //    }
// // });

// // const PORT = 3001;
// // server.listen(PORT,()=> {
// //    console.log(`Server started on port http://localhost:3001`);
// // });
 
// const http = require("http");
// const server = http.createServer((req, res) => {
//    console.log(req.url, req.method, req.headers);

// if (req.url==='/') {
//       // process.exit();// stops event loop

// //   res.end("hello");
//    res.setHeader('content-type', 'text/html');
//    res.write('<html>');
//    res.write('<head><title>complete  coading</title></head>');
//    res.write('<body><h1>enter your Details:</h1>');
//    res.write('<form>');
//    res.write('<input type="text" name="username" placeholder="Enter your name">');
//    res.write('</form>');
   
//    res.write('</body>');
//    res.write('</html>');
//    return res.end();
// }
//    res.setHeader('content-type', 'text/html');
//    res.write('<html>');
//    res.write('<head><title>complete  coading</title></head>');
//    res.write('<body><h1>welcome to Home</h1></body>');
//    res.write('</html>');
//    return res.end();
// });

const http = requre('http');
const server = http.createserver((req, res) => {
    console.log(req.url, req.method);
    res.write(
      `<html>  
       </html>
      `
   );
}); 
server.listen(3001, () => {
console.log('server running on address http://localhost:3001');
});
