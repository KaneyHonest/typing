'use strict';
const fs = require('fs');

function handle(req, res) {
  switch (req.method) {
    case 'GET':
      fs.readFile('./index.html', 'UTF-8', (error, data) => {
        res.writeHead(200, {
          'Content-Type': 'text/html; charset=utf-8'
        });
        res.write(data);
        res.end();
      })
      break;
    case 'POST':
      break;
    default:
      break;
  }
}

module.exports = {
  handle
};