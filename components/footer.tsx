import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-12 bg-gray-300 bg-grid-pattern ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-5">
        {/* Logo and Copyright */}
        <div className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3013fc23-9318-48ef-a998-6820a4e28e4f%201-I2XxDjPdMm78soNqR1mGbiWK4RYTQ4.png"
            alt="Rakini Logo"
            width={32}
            height={32}
            className="h-14 w-auto"
          />
          <span className="text-sm">© 2024 Rakinisoft. All rights reserved.</span>
        </div>

        {/* Navigation Links */}
        <nav className="w-full flex flex-wrap text-left md:justify-end justify-center items-center p-3 text-sm gap-5">
          <div className="flex flex-col mx-5">
            <Link
              href="/about"
              className="text-muted-foreground hover:text-foreground"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-muted-foreground hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="/faq"
              className="text-muted-foreground hover:text-foreground"
            >
              FAQ
            </Link>
          </div>
          <div className="flex flex-col mx-5">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col mx-5">
            <Link
              href="/careers"
              className="text-muted-foreground hover:text-foreground"
            >
              Careers
            </Link>
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-foreground"
            >
              Blog
            </Link>
            <Link
              href="/support"
              className="text-muted-foreground hover:text-foreground"
            >
              Support
            </Link>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center space-y-2 text-sm text-muted-foreground text-left">
            <div className="flex flex-col">
              <div className="flex items-center space-x-2">
                {" "}
                <Phone size={16} />
                <a href="tel:+918512892799">
                  <span>+91 85128 92799</span>
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <a href="tel:+919067702053">
                  <span>+91 9067702053</span>
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <a href="mailto:rakinisoftech@gmail.com">
                <span>rakinisoftech@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <a
                href="https://www.google.com/maps/search/18.600847,+73.813774?entry=tts&g_ep=EgoyMDI0MDYyNS4wKgBIAVAD"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span> Pimple Gurav, Pune 411018</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </footer>
  );
}
