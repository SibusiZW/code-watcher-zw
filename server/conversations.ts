'use server';

import { db } from "@/db/drizzle";
import { conversations } from "@/db/schema";

export default async function createConversation(title: string, userId: string) {
    await db.insert(conversations).values({ title: title, userId: userId });
}