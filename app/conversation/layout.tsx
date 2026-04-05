import Sidebar from "@/components/sidebar"; // Adjust path based on your folder structure

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">  
        <Sidebar /> 
        <main className="flex-1 relative overflow-y-auto bg-background">
            <div className="container mx-auto p-6">
              {children}
            </div>
        </main>
    </div>
  );
}