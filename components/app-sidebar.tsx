import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { Brander } from "@/components/brander"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { TerminalSquareIcon, BotIcon, BookOpenIcon, Settings2Icon, FrameIcon, PieChartIcon, MapIcon, Code2 } from "lucide-react"
import { UserButton } from "@clerk/nextjs"
import { getConversations } from "@/server/conversations"
import getUserId from "@/server/auth"


export async function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const userId = await getUserId();
  const allConversations = await getConversations(userId);

  const data = {
    brand: {
      name: "CodeWatcher",
      logo: <Code2 />
    },
    navMain: [
      {
        title: "Playground",
        url: "#",
        icon: (
          <TerminalSquareIcon
          />
        ),
        isActive: true,
        items: [
          {
            title: "Manage conversations",
            url: "/",
          },
        ],
      },
      {
        title: "My Conversations",
        url: "#",
        icon: (
          <BotIcon
          />
        ),
        items: allConversations?.map(c => c ? { title: c.title, url: `/conversation/${c.id}` } : c),
      },
      
    ],
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Brander brand={data.brand}/>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <UserButton />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
