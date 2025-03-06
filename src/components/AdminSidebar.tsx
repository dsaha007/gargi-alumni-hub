
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { 
  Users, Settings, LogOut, BarChart3, 
  Calendar, Bell, Menu, X, ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const navItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: BarChart3,
  },
  {
    title: "User Management",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Events",
    href: "/admin/events",
    icon: Calendar,
  },
  {
    title: "Notifications",
    href: "/admin/notifications",
    icon: Bell,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

const AdminSidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  
  const toggleSidebar = () => {
    setExpanded(!expanded);
  };
  
  const toggleMobileSidebar = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const closeMobileSidebar = () => {
    setMobileOpen(false);
  };
  
  return (
    <>
      {/* Mobile sidebar toggle */}
      <button
        onClick={toggleMobileSidebar}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md border border-border md:hidden"
        aria-label="Toggle sidebar"
      >
        {mobileOpen ? (
          <X className="h-5 w-5 text-muted-foreground" />
        ) : (
          <Menu className="h-5 w-5 text-muted-foreground" />
        )}
      </button>
      
      {/* Desktop Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-screen transition-all duration-300 bg-white border-r border-border hidden md:block",
          expanded ? "w-64" : "w-20"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="h-16 flex items-center justify-between px-4 border-b border-border">
            <div className={cn(
              "transition-opacity duration-300",
              expanded ? "opacity-100" : "opacity-0 w-0 overflow-hidden"
            )}>
              <Logo size="md" />
            </div>
            <button
              onClick={toggleSidebar}
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all",
                expanded ? "" : "mx-auto"
              )}
              aria-label="Toggle sidebar width"
            >
              <ChevronRight
                className={cn(
                  "h-5 w-5 transition-transform duration-300",
                  expanded ? "rotate-180" : "rotate-0"
                )}
              />
            </button>
          </div>
          
          <nav className="flex-1 px-3 py-4 overflow-y-auto">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.title}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) => cn(
                      "flex items-center p-3 rounded-md transition-all",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                      !expanded && "justify-center"
                    )}
                  >
                    <item.icon className={cn("h-5 w-5", expanded ? "mr-3" : "")} />
                    {expanded && <span>{item.title}</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-4 border-t border-border">
            <Button
              variant="ghost"
              className={cn(
                "w-full text-muted-foreground hover:text-foreground",
                !expanded && "justify-center p-2"
              )}
            >
              <LogOut className={cn("h-5 w-5", expanded ? "mr-2" : "")} />
              {expanded && "Logout"}
            </Button>
          </div>
        </div>
      </aside>
      
      {/* Mobile Sidebar */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-30 transition-opacity md:hidden",
          mobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={closeMobileSidebar}
      />
      
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-screen w-64 transition-transform duration-300 bg-white border-r border-border md:hidden",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="h-16 flex items-center px-4 border-b border-border">
            <Logo size="md" />
          </div>
          
          <nav className="flex-1 px-3 py-4 overflow-y-auto">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.title}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) => cn(
                      "flex items-center p-3 rounded-md transition-all",
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                    onClick={closeMobileSidebar}
                  >
                    <item.icon className="h-5 w-5 mr-3" />
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="p-4 border-t border-border">
            <Button
              variant="ghost"
              className="w-full text-muted-foreground hover:text-foreground"
            >
              <LogOut className="h-5 w-5 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
