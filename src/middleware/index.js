import express from 'express';

export default function (app) {
  // middleware
  app.use(express.json());
  // static
  app.use('/image', express.static('public'));
}