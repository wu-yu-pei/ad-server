import 'dotenv/config'
import { drizzle } from 'drizzle-orm/mysql2';
import { categoryTable, contentTable } from './schema.ts'; // 导入你的表定义
import mysql from 'mysql2/promise';

const connection = await mysql.createConnection({
  uri: process.env.DATABASE_URL,
  charset: 'utf8mb4'  // 关键设置
});

// 定义数据库类型
export const db = drizzle(connection, {
  schema: {
    categoryTable,
    contentTable
  },
  mode: 'default'
});

// 导出数据库类型
export type Database = typeof db;

export default db