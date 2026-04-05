'use client';

import { BadgePlus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";

export default function AddDialog() {
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

                <form>
                    <Input placeholder="Enter title of conversation" className="mb-2" required/>
                    <Button className="w-full bg-blue-600 hover:bg-blue-300" type="submit">
                        <BadgePlus />
                        Create converstaion
                    </Button>
                </form>

                <DialogDescription>This creates a new  conversation</DialogDescription>
            </DialogContent>
        </Dialog>
    )
}