import type { Request as Rq, Response as Rs } from "express";
import db from "../db/index.ts";
import { and, eq, like, or } from "drizzle-orm";
import { categoryTable, contentTable } from "../db/schema.ts";

export default function (app: any) {
  // hi
  app.get('/', (req: Rq, res: Rs) => {
    res.send('hi!');
  });

  // 搜索分类
  app.get('/categories/list', async (req: Rq, res: Rs) => {
    const keyword = req.query.keyword;

    // 模糊搜索name
    const result = await db.query.categoryTable.findMany({
      where: or(like(categoryTable.name, `%${keyword}%`), like(categoryTable.desc, `%${keyword}%`))
    })

    res.send(result);
  })

  // 分类浏览量+1
  app.get('/categories/view/:id', async (req: Rq, res: Rs) => {
    const id = Number(req.params.id);

    const result = await db.query.categoryTable.findFirst({
      where: eq(categoryTable.id, id)
    })

    if (result) {
      await db.update(categoryTable).set({
        viewCount: result.viewCount + 1
      }).where(eq(categoryTable.id, id))
    }

    res.send(null);
  })


  // 搜索内容
  app.get('/content', async (req: Rq, res: Rs) => {
    const categoryId: number = Number(req.query.categoryId);
    const keyword = req.query.keyword;

    const result = await db.query.contentTable.findMany({
      where: and(
        eq(contentTable.categoryId, categoryId),
        or(
          like(contentTable.name, `%${keyword}%`),
          like(contentTable.desc, `%${keyword}%`)
        )
      )
    });

    res.send(result);
  })

  // 查询详细内容
  app.get('/content/:id', async (req: Rq, res: Rs) => {
    const contentId: number = Number(req.params.id);

    const result = await db.query.contentTable.findFirst({
      where: eq(contentTable.id, contentId)
    })

    if (result) {
      db.update(contentTable).set({
        viewCount: result.viewCount + 1
      }).where(eq(contentTable.id, contentId))
    }

    res.send(result);
  })
}