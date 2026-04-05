'use client';

import { Loader2, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog";
import { useState } from "react";
import { deleteConversation } from "@/server/conversations";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: string }) {

    const [loading, setLoading] = useState(false);
    const router = useRouter();

    async function handleDelete(id: string) {
        setLoading(true);

        await deleteConversation(id);

        setLoading(false);

        toast.success('Deleted succesfully!');
        router.refresh();
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'ghost'}>
                    <Trash2 className="text-red-500"/>
                </Button>
            </DialogTrigger>

            <DialogContent className="text-center">
                <DialogTitle>Confirm deleting of conversation</DialogTitle>
                
                <Button onClick={() => handleDelete(id)} variant={'destructive'}>{loading ? <Loader2 className="animate-spin"/> : "Confirm deletion"}</Button>

                <DialogDescription>This action cannot be undone and the record is deleted from our servers</DialogDescription>
            </DialogContent>
        </Dialog>
    )
}