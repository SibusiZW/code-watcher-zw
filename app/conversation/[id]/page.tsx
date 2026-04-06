'use client';

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import createMessage from "@/server/messages"
import generateResponse from "@/server/openrouter"
import { ArrowUp } from "lucide-react"
import { useRouter } from "next/navigation"
import React, { useState, use } from "react"

interface ConversationPageProps {
    params: Promise<{
        id: string
    }>
}

export default function ConversationPage({ params }: ConversationPageProps) {

    const router = useRouter();
    const [prompt, setPrompt] = useState('');

    const { id } = use(params);

    async function handleSend(e: React.SubmitEvent) {
        e.preventDefault();

        const response = await generateResponse(prompt);
        await createMessage(prompt, response, id);
    }

    return (
        <div className="w-full h-full">
            <form className="flex space-x-4 fixed bottom-0 left-72 right-0 p-4 text-black" onSubmit={handleSend}>
                <Textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} />
                <Button className="bg-blue-500 hover:bg-blue-300 rounded-full" type="submit">
                    <ArrowUp />
                </Button>
            </form>
        </div>
    )
}