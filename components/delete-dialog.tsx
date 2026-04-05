'use client';

import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "./ui/dialog";
import React from "react";

export default function DeleteButton({ id }: { id: string }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'ghost'}>
                    <Trash2 className="text-red-500"/>
                </Button>
            </DialogTrigger>

            <DialogContent className="text-center">
                <DialogTitle>Confirm deleting of conversation</DialogTitle>
                
                <Button variant={'destructive'}>Confirm deletion</Button>

                <DialogDescription>This action cannot be undone and the record is deleted from our servers</DialogDescription>
            </DialogContent>
        </Dialog>
    )
}