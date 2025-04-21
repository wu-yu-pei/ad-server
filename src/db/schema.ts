import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

// 分类表
export const categoryTable = mysqlTable('category', {
  id: int().autoincrement().primaryKey(),
  name: varchar({ length: 255 }).notNull(), // 名称
  desc: varchar({ length: 255 }).notNull(), // 描述
  image: varchar({ length: 512 }).notNull(), // 图片
  viewCount: int().notNull().default(0), // 浏览量
  createdAt: int('created_at').notNull().default(0),  // 使用 int 替代 serial
  updatedAt: int('updated_at').notNull().default(0), // 使用 int 替代 serial
});

