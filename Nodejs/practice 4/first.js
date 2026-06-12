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

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log(req.url, req.method);
//   if (req.url === "/home") {
//    res.write('<h1>Welcome to HOme</h1>');
//    return res.end();
//   } else if (req.url ==='/men') {
//    res.write('<h1>Welcome to Men</h1>');
//    return res.end();
//   }else if (req.url ==='/women') {
//    res.write('<h1>Welcome to woMen</h1>');
//    return res.end();
//   }else if (req.url ==='/kids') {
//    res.write('<h1>Welcome to kids</h1>');
//    return res.end();
//   }

//   res.write(`
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Myntra</title>
// </head>
// <body>
//   <nav>
//     <ul>
//       <li><a href="/home">Home</a></li>
//       <li><a href="/men">Men</a></li>
//       <li><a href="/women">Women</a></li>
//       <li><a href="/kids">Kids</a></li>
//       <li><a href="/cart">Cart</a></li>
//     </ul>
//   </nav>
// </body>
// </html>
//   `);

//   res.end();
// });

// server.listen(3001, () => {
//   console.log("Server running at http://localhost:3001");
// });

// const http = require(`https`);

// const server = http.createServer((req, res) => {
//     console.log(req);
// });

// const port = 3001;
// server.listen(port, () => {
//     console.log(`server is running on address http://localhost:${port}`);
// });

// const http = require(`https`);

// const server = http.createServer((req, res) => {
//     console.log(req);
// });

// const http = require('http');

// const server = http.createServer((req, res) => {
//   // understanding  request object
//     console.log(req.url, req.method, req.headers);
// });
// const PORT = 3001;
// server.listen(PORT, () => {
//     console.log(`Server  running on address http://localhost:${PORT}`);
// });
//sending response
// const http = require('http');

// const server = http.createServer((req, res) => {
//   // understanding  request object
//     console.log(req.url, req.method, req.headers);
//     if (req.url === '/') {
//     res.setHeader('Content-Type','text/html');
//     res.write('<html>');
//     res.write('<head><title>Complete Coding</title></head>');
//     res.write('<body><h1>Welcome to shivam first home </h1></body>');
//     res.write('</html>');
//     return res.end();

//     }else if (req.url === '/products') {
//     res.setHeader('Content-Type','text/html');
//     res.write('<html>');
//     res.write('<head><title>Complete Coding</title></head>');
//     res.write('<body><h1>checkout our products </h1></body>');
//     res.write('</html>');
//     return res.end();

//     } else {
//     res.setHeader('Content-Type','text/html');
//     res.write('<html>');
//     res.write('<head><title>Complete Coding</title></head>');
//     res.write('<body><h1>Welcome to our exit </h1></body>');
//     res.write('</html>');
//     return res.end();
//     }

// });
// const PORT = 3001;
// server.listen(PORT, () => {
//     console.log(`Server  running on address http://localhost:${PORT}`);
// });

// const http = require("http");

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method, req.headers);
//     res.write('<html><head><title>My Server</title></head><body><h1>Hello from Node.js Server</h1></body></html>');

// });
// if (req.url === '/') {
//     res.write('<h1>Welcome to Home</h1>');
//     return res.end();
// } else if (req.url ==='/products') {
//     res.write('<h1>Welcome to Products</h1>');
//     return res.end();
// } else {
//     res.write('<h1>Page Not Found</h1>');
//     return res.end();
// }

// const PORT = 3001;

// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });

// const http = require("http");

// const server = http.createServer((req, res) => {
//     console.log(req.url, req.method, req.headers);

//     res.setHeader("Content-Type", "text/html");

//     if (req.url === "/") {
//         res.write("<html>");
//         res.write("<head><title>Home</title></head>");
//         res.write("<body><h1>Welcome to Home</h1></body>");
//         res.write("</html>");
//         return res.end();
//     }

//     if (req.url === "/products") {
//         res.write("<html>");
//         res.write("<head><title>Products</title></head>");
//         res.write("<body><h1>Welcome to Products</h1></body>");
//         res.write("</html>");
//         return res.end();
//     }

//     res.write("<html>");
//     res.write("<head><title>404</title></head>");
//     res.write("<body><h1>Page Not Found</h1></body>");
//     res.write("</html>");
//     res.write("</html>");
//     res.end();
// });

// const PORT = 3001;

// server.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });

// const http = require ("http");

// const server = http.createServer((req, res) => {
//     //console.log(req.url, req.method , req.headers);
//     // res.end("hello");
//     // res.setHeader("Content-Type", "text/html");
//     // res.write('<html><head><title>My Server</title></head><body><h1>Hello from Node.js Server</h1></body></html>');
//     // res.write('<body><h1>like / share/ subscribe</h1></body>');

//     // if (req.url === "/") {
//     //     res.write('<h1>Welcome to Home</h1>');
//     //     return res.end();
//     // } else if (req.url === "/products") {
//     //     res.write('<h1>Welcome to Products</h1>');
//     //     return res.end();
//     // } else {
//     //     res.write('<h1>Page Not Found</h1>');
//     //     return res.end();
//     // }
// //  if (req.url === "/") {
// // });
// if (req.url === '/') {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>Complete Coding</title></head>');
//     res.write('<body><h1>Enter your Details:</h1></body>');
//     res.write('</html>');
//     return res.end();
// }
//  res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<head><title>Complete Coding</title></head>');
//     res.write('<body><h1>Enter your Details:</h1></body>');
//     res.write('</html>');
//     return res.end();
// });
// const PORT = 3001;
// server.listen(PORT, () => {
//     console.log(`Server  running at  http://localhost:${PORT}`);
// });

const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.write(
    `<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Myntra</title>
</head>
<body>
   <head>
      <nav>
        <ul>
          <li><a href ="/home">Home</a></li>
          <li><a href ="/men">men </a></li>
          <li><a href ="/women">women</a></li>
          <li><a href ="/kids">kids</a></li>
          <li><a href ="/cart">cart </a></li>
           
        </ul>
      </nav>
   </head>
  
</body>
</html>
        `,
  );
  return res.end();
});

server.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
