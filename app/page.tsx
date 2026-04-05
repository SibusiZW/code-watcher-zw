import AddDialog from "@/components/add-dialog";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import getUserId from "@/server/auth";
import { getConversations } from "@/server/conversations";
import { Show, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {

  const userId = await getUserId();
  const conversations = await getConversations(userId);

  return (
    <div className="min-h-screen flex flex-col p-4 items-center justify-center">
      <h1 className="text-5xl font-serif mb-2.5">Code<span className="text-blue-600">Watcher</span></h1>
      
      <Show when={'signed-out'}>
        <SignInButton mode="modal">
          <Button className="w-[300px] hover:bg-blue-300 bg-blue-500 mb-5">Get started</Button>
        </SignInButton>

        <div className="p-2 bg-blue-300 rounded-full text-blue-700 border border-blue-800">Harnessing AI for flexible software development</div>
      </Show>
      
      <Show when={'signed-in'}>
        <AddDialog />
        <UserButton />

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {conversations?.map(item => <TableRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>
                <Link className="bg-blue-500 mr-2 p-2 rounded-md text-white hover:bg-blue-300" href={`conversation/${item.id}`}>Go here!!</Link>
              </TableCell>
            </TableRow>)}
          </TableBody>
        </Table>
      </Show>
    </div>
  );
}
