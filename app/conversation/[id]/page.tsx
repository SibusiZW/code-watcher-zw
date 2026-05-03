'use client';

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Message } from "@/db/schema";
import createMessage, { getMessages } from "@/server/messages"
import generateResponse from "@/server/openrouter"
import { ArrowUp, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import React, { useState, use, useEffect } from "react"
import ReactMarkdown from 'react-markdown';
import { toast } from "sonner";

interface ConversationPageProps {
    params: Promise<{
        id: string
    }>
}

export default function ConversationPage({ params }: ConversationPageProps) {

    const router = useRouter();
    const [prompt, setPrompt] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);

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
        
        setLoading(true);
        
        const response = await generateResponse(prompt);
        await createMessage(prompt, response, id);

        setLoading(false);
        toast.success('Solution is served! refresh to see it!')

        router.refresh()
    }

    return (
        <div className="w-full h-full pb-32">
            {messages?.map(msg => <div className="flex flex-col justify-center items-center" key={msg.id}>
                <p className="flex items-center justify-center bg-blue-300 text-blue-700 rounded-[10px] p-4" >{msg.userPrompt}</p>
                <div className="w-full p-2">
                    <div className="w-full h-full max-h-[400px] p-6 bg-white border border-zinc-200 rounded-2xl shadow-sm overflow-y-auto relative">
                        <span>
                            <ReactMarkdown>{msg.response}</ReactMarkdown>
                        </span>
                    </div>
                </div>
            </div>)}

            <form
                className="fixed bottom-0 left-0 right-0 md:left-72 md:right-0 p-4 flex items-center gap-4 bg-white/80 backdrop-blur-sm z-20"
                onSubmit={handleSend}
            >
                <Textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter your software idea or your buggy code"
                    required
                    className="flex-1 resize-none min-h-[48px] max-h-[160px] px-4 py-3"
                />
                <Button
                    className="w-12 h-12 p-0 flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-full"
                    type="submit"
                >
                    {loading ? <Loader2 className="animate-spin" /> : <ArrowUp />}
                </Button>
            </form>
        </div>
    )
}