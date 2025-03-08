
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const navLinks = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Events", href: "/events" },
  { text: "Gallery", href: "/gallery" },
  { text: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Helper function to determine if a path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "py-3 bg-white/80 backdrop-blur-md shadow-sm" : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="z-10">
          <Logo size="md" monochrome={!isScrolled && location.pathname === "/"} />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.text}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors relative",
                isActive(link.href) 
                  ? "text-primary" 
                  : isScrolled || location.pathname !== "/"
                    ? "text-foreground hover:text-primary" 
                    : "text-foreground/90 hover:text-primary"
              )}
            >
              {link.text}
              {isActive(link.href) && (
                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full"></span>
              )}
            </Link>
          ))}
          <Link to="/register">
            <Button variant="default" size="sm" className="ml-4">
              Register
            </Button>
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-10 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className={cn(
              "h-6 w-6 transition-colors",
              isScrolled || location.pathname !== "/" ? "text-foreground" : "text-foreground/90"
            )} />
          ) : (
            <Menu className={cn(
              "h-6 w-6 transition-colors",
              isScrolled || location.pathname !== "/" ? "text-foreground" : "text-foreground/90"
            )} />
          )}
        </button>
        
        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background flex flex-col items-center justify-center z-[5] transition-all duration-300 md:hidden",
            isMobileMenuOpen 
              ? "opacity-100 pointer-events-auto translate-x-0" 
              : "opacity-0 pointer-events-none translate-x-full"
          )}
        >
          <nav className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.text}
                to={link.href}
                className={cn(
                  "text-lg font-medium",
                  isActive(link.href) ? "text-primary" : "text-foreground"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.text}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-4 w-full items-center">
              <Link to="/register" className="w-40">
                <Button variant="default" className="w-full">
                  Register
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
