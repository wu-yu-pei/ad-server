import connect from '../db/index.js'
import { ErrorResponse, Response } from '../utils/index.js';

export default function (app) {
  // hi
  app.get('/', (req, res) => {
    res.send('hi!');
  });

  // 搜索分类
  app.get('/categories/list', async (req, res) => {
    const keyword = req.query.keyword;
    const [result] = await connect.query(`SELECT id, name, image, des as 'desc', createdAt, updatedAt, viewCount FROM category WHERE name LIKE '%${keyword}%' OR des LIKE '%${keyword}%' LIMIT 0,1000`)

    res.send(Response(result));
  })

  // 详情
  app.get('/categories/:id', async (req, res) => {
    try {
      const id = Number(req.params.id);

      const [result] = await connect.query(`SELECT * FROM category WHERE id = ?`, [id]);

      if (!result || result.length === 0) {
        return res.status(400).send(ErrorResponse(null, 'Category not found', 400));
      }

      // Then update the view count
      await connect.query(`UPDATE category SET viewCount = viewCount + 1 WHERE id = ?`, [id]);

      res.send(Response(result[0]));
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send(ErrorResponse());
    }
  });

  // 创建
  app.post('/categories', async (req, res) => {
    const { name, image, des, content } = req.body;
    try {
      const [result] = await connect.query(`INSERT INTO category (name, image, des, content) VALUES (?, ?, ?, ?)`, [name, image, des, content]);

      res.send(Response(result));
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send(ErrorResponse());
    }

  });
}