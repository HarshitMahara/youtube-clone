import { SidebarProvider } from "@/components/ui/sidebar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: HomeLayoutProps) => {
  return <SidebarProvider>
    <div className="w-full">
        <HomeNavbar />
    </div>
    <div>
        {children}
    </div>
    
    </SidebarProvider>;
};

