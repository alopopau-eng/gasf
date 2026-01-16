import { Shield, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-foreground to-foreground/95 text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-7 h-7 text-primary-foreground" />
              </div>
              <span className="text-2xl font-extrabold">Care</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              شريكك الموثوق في التأمين. نقدم حلول تأمين شاملة تناسب احتياجاتك وميزانيتك.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-5">روابط سريعة</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-background/70 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="#quote" className="text-background/70 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  طلب عرض سعر
                </a>
              </li>
              <li>
                <Link href="/privacy" className="text-background/70 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-background/70 hover:text-primary transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  الشروط والأحكام
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-5">خدماتنا</h3>
            <ul className="space-y-3">
              <li className="text-background/70 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                تأمين السيارات
              </li>
              <li className="text-background/70 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                تأمين صحي
              </li>
              <li className="text-background/70 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                تأمين المنازل
              </li>
              <li className="text-background/70 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                تأمين السفر
              </li>
              <li className="text-background/70 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                تأمين الحياة
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-5">تواصل معنا</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:920000000" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-background font-bold text-lg block">920 000 000</span>
                    <span className="text-background/60 text-xs">متاحون ٢٤/٧</span>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="text-background/80">info@example.com</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-background/80">المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-background/10 pt-8 mb-8">
          <div className="bg-background/5 rounded-2xl p-6 border border-background/10">
            <p className="text-sm text-background/60 leading-relaxed">
              <strong className="text-background/80">إخلاء المسؤولية:</strong> هذا الموقع يقدم خدمة مقارنة وتوصيل بين العملاء وشركات التأمين المرخصة. 
              جميع المعلومات المقدمة هي لأغراض إرشادية فقط ولا تعتبر نصيحة مالية أو تأمينية. 
              الأسعار والتغطيات الفعلية قد تختلف حسب الشركة المؤمنة والظروف الفردية. 
              يرجى مراجعة وثائق التأمين بعناية قبل الشراء. 
              نحن لسنا شركة تأمين ولا نضمن توفر أي منتج أو سعر معين.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50">
            © {currentYear} Care. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-background/50 hover:text-primary transition-colors">
              سياسة الخصوصية
            </Link>
            <span className="text-background/20">|</span>
            <Link href="/terms" className="text-background/50 hover:text-primary transition-colors">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
