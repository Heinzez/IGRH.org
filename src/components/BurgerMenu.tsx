import { Menu, X, HelpCircle, Headphones } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-4 mt-8">
          {/* Mobile Navigation Links */}
          <div className="space-y-4">
            <a 
              href="/" 
              className="block text-foreground hover:text-primary transition-colors text-lg"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a 
              href="/about" 
              className="block text-foreground hover:text-primary transition-colors text-lg"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </a>
            <a 
              href="/work" 
              className="block text-foreground hover:text-primary transition-colors text-lg"
              onClick={() => setIsOpen(false)}
            >
              Our Work
            </a>
            <a 
              href="/research" 
              className="block text-foreground hover:text-primary transition-colors text-lg"
              onClick={() => setIsOpen(false)}
            >
              Research
            </a>
            <a 
              href="/resources" 
              className="block text-foreground hover:text-primary transition-colors text-lg"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </a>
            <a 
              href="/news" 
              className="block text-foreground hover:text-primary transition-colors text-lg"
              onClick={() => setIsOpen(false)}
            >
              News
            </a>
          </div>
          
          <div className="border-t border-border pt-4 space-y-4">
            <div className="flex items-center space-x-3">
              <HelpCircle className="h-5 w-5 text-muted-foreground" />
              <span className="text-foreground">FAQ</span>
            </div>
            <div className="flex items-center space-x-3">
              <Headphones className="h-5 w-5 text-muted-foreground" />
              <span className="text-foreground">Support</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-foreground">Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export function DesktopBurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="hidden md:block">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px]">
        <div className="flex flex-col space-y-6 mt-8">
          <div className="flex items-center space-x-3">
            <HelpCircle className="h-5 w-5 text-muted-foreground" />
            <span className="text-foreground">FAQ</span>
          </div>
          <div className="flex items-center space-x-3">
            <Headphones className="h-5 w-5 text-muted-foreground" />
            <span className="text-foreground">Support</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-foreground">Theme</span>
            <ThemeToggle />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}