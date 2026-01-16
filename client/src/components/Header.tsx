import { Shield, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "wouter";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground" data-testid="text-logo">Care</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection("services")} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-services"
            >
              خدماتنا
            </button>
            <button 
              onClick={() => scrollToSection("quote")} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-quote"
            >
              طلب عرض
            </button>
            <Link 
              href="/privacy" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-privacy"
            >
              سياسة الخصوصية
            </Link>
            <Link 
              href="/terms" 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-terms"
            >
              الشروط والأحكام
            </Link>
          </nav>

          {/* CTA and Phone */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:920000000" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-phone"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">920 000 000</span>
            </a>
            <a 
              href="https://zzser.com/?label=cbb3dba68794e5c32e7e69dd0e073f56"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button data-testid="button-get-quote-header">
                احصل على عرض
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => scrollToSection("services")} 
                className="text-muted-foreground hover:text-foreground transition-colors text-right"
                data-testid="link-services-mobile"
              >
                خدماتنا
              </button>
              <button 
                onClick={() => scrollToSection("quote")} 
                className="text-muted-foreground hover:text-foreground transition-colors text-right"
                data-testid="link-quote-mobile"
              >
                طلب عرض
              </button>
              <Link 
                href="/privacy" 
                className="text-muted-foreground hover:text-foreground transition-colors text-right"
                data-testid="link-privacy-mobile"
              >
                سياسة الخصوصية
              </Link>
              <Link 
                href="/terms" 
                className="text-muted-foreground hover:text-foreground transition-colors text-right"
                data-testid="link-terms-mobile"
              >
                الشروط والأحكام
              </Link>
              <a 
                href="tel:920000000" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors justify-end"
                data-testid="link-phone-mobile"
              >
                <span className="font-medium">920 000 000</span>
                <Phone className="w-4 h-4" />
              </a>
              <a 
                href="https://zzser.com/?label=cbb3dba68794e5c32e7e69dd0e073f56"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full" data-testid="button-get-quote-mobile">
                  احصل على عرض
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
