import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const conversations = pgTable('conversations', {
    id: uuid('id').primaryKey().notNull().defaultRandom(),
    title: text('title').notNull(),
    userId: text('userId').notNull(),
    createdOn: timestamp().defaultNow(),
})

export const messages = pgTable('messages', {
    id: uuid('id').primaryKey().notNull().defaultRandom(),
    userPrompt: text().notNull(),
    response: text().notNull(),
    conversationId: uuid().references(() => conversations.id).notNull(),
    createdOn: timestamp().defaultNow(),
})