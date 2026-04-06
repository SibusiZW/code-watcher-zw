'use client';

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Message } from "@/db/schema";
import createMessage, { getMessages } from "@/server/messages"
import generateResponse from "@/server/openrouter"
import { ArrowUp } from "lucide-react"
import { useRouter } from "next/navigation"
import React, { useState, use, useEffect } from "react"

interface ConversationPageProps {
    params: Promise<{
        id: string
    }>
}

export default function ConversationPage({ params }: ConversationPageProps) {

    const router = useRouter();
    const [prompt, setPrompt] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);

    const { id } = use(params);

    useEffect(() => {
        async function findMessages() {
            const allMessages = await getMessages(id);
            setMessages(allMessages)
        }
        findMessages()
    }, [])

    async function handleSend(e: React.SubmitEvent) {
        e.preventDefault();

        const response = await generateResponse(prompt);
        await createMessage(prompt, response, id);

        router.refresh()
    }

    return (
        <div className="w-full h-full">
            {messages?.map(msg => <div className="flex flex-col justify-center items-center" key={msg.id}>
                <p>{msg.userPrompt}</p>
                <div className="w-full p-2">
                    <div className="w-full h-[400px] p-6 bg-white border border-zinc-200 rounded-2xl shadow-sm overflow-y-auto relative">
                        <span>
                            {msg.response}
                        </span>
                    </div>
                </div>
            </div>)}

            <form className="flex space-x-4 fixed bottom-0 left-72 right-0 p-4 text-black" onSubmit={handleSend}>
                <Textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} />
                <Button className="bg-blue-500 hover:bg-blue-300 rounded-full" type="submit">
                    <ArrowUp />
                </Button>
            </form>
        </div>
    )
}