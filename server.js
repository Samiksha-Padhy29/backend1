const http = require('http');
const fs = require('fs');
const path = require('path');

// Create server
const server = http.createServer((req, res) => {
  const url = req.url;

  // Home route with links
  if (url === '/') {
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to my Server</title>
      </head>
      <body>
        <h1>Welcome to my Server</h1>
        <ul>
          <li><a href="/text">Text Route</a></li>
          <li><a href="/html">HTML Route</a></li>
          <li><a href="/media/image">Image Route</a></li>
          <li><a href="/media/audio">Audio Route</a></li>
          <li><a href="/media/video">Video Route</a></li>
          <li><a href="/pdf">PDF Route</a></li>
        </ul>
      </body>
      </html>
    `;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(htmlContent);
  }

  // Text route
  else if (url === '/text') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('This is a text response.');
  }

  // HTML file route
  else if (url === '/html') {
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error loading HTML file');
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(data);
    });
  }

  // Media route (Image)
  else if (url === '/media/image') {
    const filePath = path.join(__dirname, 'image.jpg');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error loading image');
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'image/jpeg');
      res.end(data);
    });
  }

  // Media route (Audio)
  else if (url === '/media/audio') {
    const filePath = path.join(__dirname, 'audio.mp3');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error loading audio');
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'audio/mpeg');
      res.end(data);
    });
  }

  // Media route (Video)
  else if (url === '/media/video') {
    const filePath = path.join(__dirname, 'video.mp4');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error loading video');
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'video/mp4');
      res.end(data);
    });
  }

  // PDF route
  else if (url === '/pdf') {
    const filePath = path.join(__dirname, 'sample.pdf');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Error loading PDF');
        return;
      }
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/pdf');
      res.end(data);
    });
  }

  // 404 route
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page not found');
  }
});

// Server listens on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
