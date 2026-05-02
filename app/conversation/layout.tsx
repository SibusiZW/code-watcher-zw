import { AppSidebar } from "@/components/app-sidebar";
import Sidebar from "@/components/sidebar"; // Adjust path based on your folder structure
import { Button } from "@/components/ui/button";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Show, SignInButton } from "@clerk/nextjs";

export default function CoversationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="flex h-screen overflow-hidden">  
          <Show when={'signed-in'}>
            <AppSidebar />
            <main className="flex-1 relative overflow-y-auto bg-background">

              <div className="flex p-4">
                <SidebarTrigger />
              </div>

              <div className="container mx-auto p-6">
                {children}
              </div>
            </main>
          </Show>

          <Show when={'signed-out'}>
            <div className="p-4">
              <SignInButton><Button className="p-2 bg-blue-500 hover:bg-blue-300">Sign In!</Button></SignInButton>
            </div>
          </Show>
      </div>
    </SidebarProvider>
  );
}