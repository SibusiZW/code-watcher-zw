import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger } from "./ui/dialog";

export default function AddDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-blue-500 hover:bg-blue-300 mb-2.5">
                    <Plus />
                    Create a new conversation
                </Button>
            </DialogTrigger>
        </Dialog>
    )
}