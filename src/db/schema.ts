import { sql } from 'drizzle-orm';
import { int, mysqlTable, timestamp, varchar } from 'drizzle-orm/mysql-core';

// 分类表
export const categoryTable = mysqlTable('category', {
  id: int().autoincrement().primaryKey(),
  name: varchar({ length: 255 }).notNull(), // 名称
  desc: varchar({ length: 255 }).notNull(), // 描述
  image: varchar({ length: 512 }).notNull(), // 图片
  viewCount: int().notNull().default(0), // 浏览量
  createdAt: timestamp('createdAt').default(sql`(CURRENT_TIMESTAMP)`).notNull(),
  updatedAt: timestamp('updatedAt').default(sql`(CURRENT_TIMESTAMP)`).notNull()
});

export const contentTable = mysqlTable('content', {
  id: int().autoincrement().primaryKey(),
  name: varchar({ length: 255 }).notNull(), // 名称
  desc: varchar({ length: 255 }).notNull(), // 描述
  image: varchar({ length: 512 }).notNull(), // 图片
  viewCount: int().notNull().default(0), // 浏览量
  content: varchar({ length: 1024 }).notNull(), // 内容
  categoryId: int().notNull(),
  createdAt: timestamp('createdAt').default(sql`(CURRENT_TIMESTAMP)`).notNull(),
  updatedAt: timestamp('updatedAt').default(sql`(CURRENT_TIMESTAMP)`).notNull()
});