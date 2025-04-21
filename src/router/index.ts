import type { Request as Rq, Response as Rs } from "express";
import db from "../db/index.ts";
import { like } from "drizzle-orm";
import { categoryTable } from "../db/schema.ts";

export default function (app: any) {
  // hi
  app.get('/', (req: Rq, res: Rs) => {
    res.send('hi!');
  });

  // 搜索分类
  app.get('/categories', async (req: Rq, res: Rs) => {
    const keyword = req.query.keyword;

    // 模糊搜索name
    const result = await db.query.categoryTable.findMany({
      where: like(categoryTable.name, `%${keyword}%`)
    })

    res.send(result);
  })

  // 搜索内容
  app.get('/content', (req: Rq, res: Rs) => {
    const categoryId = req.query.categoryId;
    const keyword = req.query.keyword;
    res.send({
      categoryId,
      keyword
    });
  })
}