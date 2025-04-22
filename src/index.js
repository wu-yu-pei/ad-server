import express from 'express';
import useMiddleware from './middleware/index.js';
import useRouter from './router/index.ts';
import './db/index.js';

const app = express();

useMiddleware(app)

useRouter(app)

app.listen(7899, () => {
  console.log('Server started on port 7899');
});