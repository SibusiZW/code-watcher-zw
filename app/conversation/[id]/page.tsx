import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ArrowUp } from "lucide-react"

interface ConversationPageProps {
    params: {
        id: string
    }
}

export default function ConversationPage({ params }: ConversationPageProps) {
    return (
        <div className="w-full h-full">
            
            <div className="fixed bottom-0 left-72 right-0 p-4 text-black">
                <div className="flex space-x-4">
                    <Textarea />
                    <Button className="bg-blue-500 hover:bg-blue-300 rounded-full" type="submit">
                        <ArrowUp />
                    </Button>
                </div>
            </div>
        </div>
    )
}