import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText, Users, AlertCircle } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "المعلومات التي نجمعها",
    content: [
      "المعلومات الشخصية: الاسم، البريد الإلكتروني، رقم الهاتف، والعنوان عند تقديم طلب عرض سعر.",
      "معلومات التأمين: نوع التأمين المطلوب، تفاصيل المركبة أو الممتلكات، التاريخ الطبي عند الحاجة.",
      "معلومات الاستخدام: بيانات تصفح الموقع، عنوان IP، نوع المتصفح، والصفحات التي تمت زيارتها.",
      "ملفات تعريف الارتباط (Cookies): لتحسين تجربة المستخدم وتخصيص المحتوى.",
    ],
  },
  {
    icon: Eye,
    title: "كيف نستخدم معلوماتك",
    content: [
      "معالجة طلبات عروض الأسعار وتوصيلك بشركات التأمين المناسبة.",
      "التواصل معك بخصوص العروض والخدمات المطلوبة.",
      "تحسين موقعنا وخدماتنا بناءً على تفاعلات المستخدمين.",
      "إرسال تحديثات تسويقية (بموافقتك المسبقة فقط).",
      "الامتثال للمتطلبات القانونية والتنظيمية.",
    ],
  },
  {
    icon: Users,
    title: "مشاركة المعلومات",
    content: [
      "شركات التأمين المرخصة: لمعالجة طلبات العروض الخاصة بك.",
      "مزودو الخدمات: الذين يساعدوننا في تشغيل الموقع وتقديم الخدمات.",
      "الجهات الحكومية: عند الطلب القانوني أو للامتثال للوائح.",
      "لا نبيع معلوماتك الشخصية لأطراف ثالثة لأغراض تسويقية.",
    ],
  },
  {
    icon: Lock,
    title: "حماية المعلومات",
    content: [
      "نستخدم تقنيات تشفير متقدمة (SSL/TLS) لحماية البيانات المنقولة.",
      "نطبق إجراءات أمنية صارمة للحماية من الوصول غير المصرح به.",
      "نراجع ممارساتنا الأمنية بانتظام ونحدثها حسب الحاجة.",
      "نقصر الوصول إلى البيانات الشخصية على الموظفين المصرح لهم فقط.",
    ],
  },
  {
    icon: Shield,
    title: "حقوقك",
    content: [
      "الوصول إلى بياناتك الشخصية وطلب نسخة منها.",
      "تصحيح أي معلومات غير دقيقة في سجلاتنا.",
      "طلب حذف بياناتك الشخصية (مع مراعاة المتطلبات القانونية).",
      "الاعتراض على معالجة بياناتك لأغراض تسويقية.",
      "سحب موافقتك على استخدام بياناتك في أي وقت.",
    ],
  },
  {
    icon: AlertCircle,
    title: "ملفات تعريف الارتباط",
    content: [
      "نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا.",
      "ملفات ضرورية: لتشغيل الموقع بشكل صحيح.",
      "ملفات تحليلية: لفهم كيفية استخدام الزوار للموقع.",
      "يمكنك إدارة تفضيلات ملفات تعريف الارتباط من إعدادات متصفحك.",
    ],
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-privacy-title">
              سياسة الخصوصية
            </h1>
            <p className="text-muted-foreground">
              آخر تحديث: يناير ٢٠٢٦
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed">
                نحن في "Care" نقدر خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع واستخدام وحماية معلوماتك عند استخدام موقعنا وخدماتنا. باستخدامك لموقعنا، فإنك توافق على الممارسات الموضحة في هذه السياسة.
              </p>
            </CardContent>
          </Card>

          {/* Sections */}
          <div className="grid gap-6">
            {sections.map((section, index) => (
              <Card key={index}>
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center">
                      <section.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact */}
          <Card className="mt-8">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3">تواصل معنا</h3>
              <p className="text-muted-foreground leading-relaxed">
                إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه أو ممارساتنا المتعلقة بالبيانات، يرجى التواصل معنا عبر البريد الإلكتروني: privacy@example.com أو الاتصال على: 920 000 000
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
