import { Shield, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Care</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              شريكك الموثوق في التأمين. نقدم حلول تأمين شاملة تناسب احتياجاتك وميزانيتك.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-background/70 hover:text-background transition-colors text-sm">
                  خدماتنا
                </a>
              </li>
              <li>
                <a href="#quote" className="text-background/70 hover:text-background transition-colors text-sm">
                  طلب عرض سعر
                </a>
              </li>
              <li>
                <Link href="/privacy" className="text-background/70 hover:text-background transition-colors text-sm">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-background/70 hover:text-background transition-colors text-sm">
                  الشروط والأحكام
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">خدماتنا</h3>
            <ul className="space-y-2">
              <li className="text-background/70 text-sm">تأمين السيارات</li>
              <li className="text-background/70 text-sm">تأمين صحي</li>
              <li className="text-background/70 text-sm">تأمين المنازل</li>
              <li className="text-background/70 text-sm">تأمين السفر</li>
              <li className="text-background/70 text-sm">تأمين الحياة</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>920 000 000</span>
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@example.com</span>
              </li>
              <li className="flex items-start gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-background/20 pt-6 mb-6">
          <div className="bg-background/10 rounded-lg p-4">
            <p className="text-xs text-background/60 leading-relaxed">
              <strong>إخلاء المسؤولية:</strong> هذا الموقع يقدم خدمة مقارنة وتوصيل بين العملاء وشركات التأمين المرخصة. 
              جميع المعلومات المقدمة هي لأغراض إرشادية فقط ولا تعتبر نصيحة مالية أو تأمينية. 
              الأسعار والتغطيات الفعلية قد تختلف حسب الشركة المؤمنة والظروف الفردية. 
              يرجى مراجعة وثائق التأمين بعناية قبل الشراء. 
              نحن لسنا شركة تأمين ولا نضمن توفر أي منتج أو سعر معين.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} Care. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-background/60 hover:text-background transition-colors text-sm">
              سياسة الخصوصية
            </Link>
            <span className="text-background/40">|</span>
            <Link href="/terms" className="text-background/60 hover:text-background transition-colors text-sm">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
