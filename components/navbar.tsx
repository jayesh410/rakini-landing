"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();

  const navLinks = [
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/contact", label: "Contact" },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : ""
      }`}
    >
      <div className="container flex h-16 items-center justify-between mx-auto px-[2vw]">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={"/logo-rakini.png"}
            alt="about"
            width={60}
            height={60}
            className="h-16 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              href={link.path}
              key={link.label}
              className={`transition duration-150 border-b-2  hover:text-primary ${
                pathname === link.path
                  ? "text-primary border-yellow-500"
                  : "border-transparent"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button>Get Started</Button>
        </nav>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="secondary" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="max-w-[250px]" side="right">
            <nav className="flex flex-col space-y-4 mt-6 ">
              {navLinks.map((link) => (
                <SheetTrigger key={link.label}>
                <Link
                href={link.path}
                className={`text-lg font-medium border-b-2 transition-all duration-300 
                  ${
                    pathname === link.path
                      ? "text-primary border-yellow-500" // Active link styles
                      : "text-gray-700 border-transparent hover:text-yellow-500 hover:border-yellow-500"
                  }`}
              >
                {link.label}
              </Link>
              </SheetTrigger>
              
              ))}
              <Button className="w-full">Get Started</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
