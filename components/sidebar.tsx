import { Code2, Plus } from 'lucide-react';
import { UserButton } from '@clerk/nextjs';
import { getConversations } from '@/server/conversations';
import getUserId from '@/server/auth';
import Link from 'next/link';

export default async function Sidebar() {

  const userId = await getUserId();
  const allConversations = await getConversations(userId)

  return (
    <nav className="flex flex-col w-72 bg-sidebar border-r border-sidebar-border h-screen">
      
      {/* Header with Logo */}
      <div className="flex items-center gap-3 h-16 px-4 border-b border-sidebar-border">
        <div className="w-8 h-8 rounded-md bg-blue-500 flex items-center justify-center flex-shrink-0">
          <Code2 size={20} className="text-sidebar-primary-foreground" />
        </div>
        <span className="font-semibold font-serif text-sidebar-foreground">CodeWatcherZW</span>
      </div>

      {/* Navigation Items */}
      <div className="flex-1 overflow-y-auto py-4 px-2 space-y-2">
        <Link className='flex items-center justify-center bg-blue-500 p-2 rounded-md text-white' href={'/'}>
            <Plus />
            Add New Conversation
        </Link>
        {allConversations?.map(item => <Link key={item.id} href={`conversation/${item.id}`} className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200 text-sm font-medium`}>{item.title}</Link>)}
      </div>

      {/* Footer Section */}
      <div className="border-t border-sidebar-border p-2 space-y-2">
        <UserButton />
      </div>
    </nav>
  );
}