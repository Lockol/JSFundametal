const http = require("http");
const personalModule = require("./main");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  const username = 'John'; // я не зовсім зрозумів чи я мав це зробити через prompt("Введіть ваше ім'я:")??? Але тоді видає помилку
  const greetingMessage = personalModule.getGreetingMessage(username);
  res.end(`<h1>${greetingMessage}</h1>`);
});

const port = 5000;
server.listen(port, () => {
  console.log(`Server port is: ${port}`);
});



//--------------------------------------1 Task--------------------------------------------------------
// const http = require('http');
// const os = require('os');
// const path = require('path');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html' });

//   const username = os.userInfo().username;
//   const osType = os.type();
//   const uptime = Math.floor(os.uptime() / 60); // у хвилинах
//   const currentDir = process.cwd();
//   const serverFilename = path.basename(__filename);

//   const html = `
//     <html>
//       <head>
//         <title>Server Information</title>
//       </head>
//       <body>
//         <h1>Server Information</h1>
//         <p>Username: ${username}</p>
//         <p>OS Type: ${osType}</p>
//         <p>Uptime (minutes): ${uptime}</p>
//         <p>Current Directory: ${currentDir}</p>
//         <p>Server Filename: ${serverFilename}</p>
//       </body>
//     </html>
//   `;

//   res.end(html);
// });

// server.listen(5000, () => {
//   console.log('Server running on port 5000');
// });