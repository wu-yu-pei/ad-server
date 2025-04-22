import express from 'express';
import type { Application } from 'express';

export default function (app: Application) {
  // middleware
  app.use(express.json());
  // static
  app.use('/image', express.static('public'));
}