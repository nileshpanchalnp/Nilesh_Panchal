import { useState } from "react";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        className=" fixed inset-y-0 left-0 lg:static z-50 "
      />
      <div className="  flex-1 flex flex-col">
        <header className="bg-white shadow-sm lg:hidden">
          <div className="  max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <Menu
              className="h-6 w-6 cursor-pointer"
              onClick={() => setSidebarOpen(true)}
            />
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto ">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-gray-900">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
