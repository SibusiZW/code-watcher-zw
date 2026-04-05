'use client';

import { BadgePlus, Loader2, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";
import createConversation from "@/server/conversations";

export default function AddDialog() {

    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { user } = useUser();

    async function handleCreate(e: React.SubmitEvent) {
        e.preventDefault();
       if (user) {
            
            setLoading(true);

            await createConversation(title, user.id);

            setLoading(false);
            
            router.refresh()
            toast.success('Succesfully created conversation!')
       }
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-blue-500 hover:bg-blue-300 mb-2.5">
                    <Plus />
                    Create a new conversation
                </Button>
            </DialogTrigger>

            <DialogContent className="text-center">
                <DialogTitle>Create new conversation</DialogTitle>

                <form onSubmit={handleCreate}>
                    <Input placeholder="Enter title of conversation" className="mb-2" onChange={(e) => setTitle(e.target.value)} required/>
                    <Button className="w-full bg-blue-600 hover:bg-blue-300" type="submit">
                        {loading ? <Loader2 className="animate-spin"/> : <><BadgePlus /> Create conversation</>}
                    </Button>
                </form>

                <DialogDescription>This creates a new  conversation</DialogDescription>
            </DialogContent>
        </Dialog>
    )
}