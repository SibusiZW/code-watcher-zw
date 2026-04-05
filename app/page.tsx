import { Button } from "@/components/ui/button";
import { Show, SignInButton } from "@clerk/nextjs";
import { Gavel } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col p-4 items-center justify-center">
      <h1 className="text-5xl font-serif mb-2.5">Code<span className="text-blue-600">Watcher</span></h1>
      
      <Show when={'signed-out'}>
        <SignInButton mode="modal">
          <Button className="w-[300px] hover:bg-blue-300 bg-blue-500 mb-5">Get started</Button>
        </SignInButton>

        <div className="p-2 bg-blue-300 rounded-full text-blue-700 border border-blue-800">Harnessing AI for flexible software development</div>
      </Show>
    </div>
  );
}
