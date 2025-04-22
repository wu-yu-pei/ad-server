import connect from '../db/index.js'

export default function (app: any) {
  // hi
  app.get('/', (req, res) => {
    res.send('hi!');
  });

  // 搜索分类
  app.get('/categories/list', async (req, res) => {
    const keyword = req.query.keyword;

    const [result] = await connect.query(`SELECT * FROM 'category' WHERE 'name' LIKE '%${keyword}%' OR 'desc' LIKE '%${keyword}%' LIMIT 0,1000`)

    res.send(result);
  })

  // 分类浏览量+1
  app.get('/categories/view/:id', async (req, res) => {
    const id = Number(req.params.id);

    await connect.query(`UPDATE 'category' SET 'viewCount' = viewCount + 1 WHERE id = ${id}`)

    res.send(null);
  })


  // 搜索内容
  app.get('/content', async (req, res) => {
    const categoryId: number = Number(req.query.categoryId);
    const keyword = req.query.keyword;

    const [result] = await connect.query(`SELECT * FROM content WHERE 'categoryId' = ${categoryId} AND 'name' LIKE '%${keyword}%' OR 'desc' LIKE '%${keyword}%' LIMIT 0,1000`)

    res.send(result);
  })

  // 查询详细内容
  app.get('/content/:id', async (req, res) => {
    const contentId: number = Number(req.params.id);

    const result = await connect.query(`SELECT * FROM content WHERE 'id' = ${contentId}`)

    // 阅读数量+1
    await connect.query(`UPDATE content SET 'viewCount' = viewCount + 1 WHERE 'id' = ${contentId}`)

    res.send(result);
  })
}