'use server';

import { db } from "@/db/drizzle";
import { messages } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function createMessage(prompt: string, response: string, cId: string) {
    await db.insert(messages).values({ userPrompt: prompt, response: response, conversationId: cId })
}

export async function getMessages(conversationId: string) {
    const allMessages = await db.select().from(messages).where(eq(messages.conversationId, conversationId))
    return allMessages
}