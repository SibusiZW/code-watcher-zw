'use server';

import { db } from "@/db/drizzle";
import { conversations } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function createConversation(title: string, userId: string) {
    await db.insert(conversations).values({ title: title, userId: userId });
}

export async function getConversations(userId: string | undefined) {
    if (userId) {
        const allConversations = await db.select().from(conversations).where(eq(conversations.userId, userId))
        return allConversations
    }
}