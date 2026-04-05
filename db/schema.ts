import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const conversations = pgTable('conversations', {
    id: uuid('id').notNull().defaultRandom(),
    title: text('title').notNull(),
    userId: text('userId').notNull(),
    createdOn: timestamp().defaultNow(),
})