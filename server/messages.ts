'use server';

import { db } from "@/db/drizzle";
import { messages } from "@/db/schema";

export default async function createMessage(prompt: string, response: string, cId: string) {
    await db.insert(messages).values({ userPrompt: prompt, response: response, conversationId: cId })
}