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
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18 py-3 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <Shield className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-extrabold text-foreground" data-testid="text-logo">Care</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("services")} 
              className="text-muted-foreground hover:text-primary font-medium transition-colors"
              data-testid="link-services"
            >
              خدماتنا
            </button>
            <button 
              onClick={() => scrollToSection("quote")} 
              className="text-muted-foreground hover:text-primary font-medium transition-colors"
              data-testid="link-quote"
            >
              طلب عرض
            </button>
            <Link 
              href="/privacy" 
              className="text-muted-foreground hover:text-primary font-medium transition-colors"
              data-testid="link-privacy"
            >
              سياسة الخصوصية
            </Link>
            <Link 
              href="/terms" 
              className="text-muted-foreground hover:text-primary font-medium transition-colors"
              data-testid="link-terms"
            >
              الشروط والأحكام
            </Link>
          </nav>

          {/* CTA and Phone */}
          <div className="hidden md:flex items-center gap-5">
            <a 
              href="tel:920000000" 
              className="flex items-center gap-3 bg-gradient-to-l from-accent/10 to-primary/10 px-4 py-2 rounded-full border border-primary/20 hover:border-primary/40 transition-all hover:shadow-md group"
              data-testid="link-phone"
            >
              <div className="w-9 h-9 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-muted-foreground">اتصل بنا</span>
                <span className="font-bold text-foreground">920 000 000</span>
              </div>
            </a>
            <a 
              href="https://zzser.com/?label=cbb3dba68794e5c32e7e69dd0e073f56"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="shadow-md hover:shadow-lg transition-shadow" data-testid="button-get-quote-header">
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
