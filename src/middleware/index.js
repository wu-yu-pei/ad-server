import express from 'express';

// Middleware for logging requests
function logRequests(req, res, next) {
  const requestTime = new Date().toISOString();
  console.log(`[${requestTime}] ${req.method} ${req.path} - IP: ${req.ip}`);
  next();
}

export default function (app) {
  // middleware
  app.use(express.json());
  app.use(logRequests);

  // static
  app.use('/image', express.static('public'));
}