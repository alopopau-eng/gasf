import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckSquare, AlertTriangle, Scale, XCircle, RefreshCw, Globe, HelpCircle } from "lucide-react";

const sections = [
  {
    icon: CheckSquare,
    title: "قبول الشروط",
    content: [
      "باستخدامك لهذا الموقع، فإنك توافق على الالتزام بهذه الشروط والأحكام.",
      "إذا كنت لا توافق على أي من هذه الشروط، يرجى عدم استخدام الموقع.",
      "نحتفظ بالحق في تعديل هذه الشروط في أي وقت، وسيتم نشر التحديثات على هذه الصفحة.",
      "استمرارك في استخدام الموقع بعد التعديلات يعني قبولك للشروط المعدلة.",
    ],
  },
  {
    icon: Globe,
    title: "وصف الخدمة",
    content: [
      "موقع 'تأمينك' هو منصة لمقارنة عروض التأمين من شركات مختلفة.",
      "نحن نعمل كوسيط بينك وبين شركات التأمين المرخصة.",
      "لا نقدم منتجات تأمين مباشرة ولسنا شركة تأمين.",
      "جميع وثائق التأمين تصدر من شركات التأمين المرخصة مباشرة.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "إخلاء المسؤولية",
    content: [
      "المعلومات المقدمة على الموقع هي لأغراض إرشادية فقط ولا تعتبر نصيحة مالية أو تأمينية.",
      "الأسعار والتغطيات المعروضة تقديرية وقد تختلف عن العروض النهائية من شركات التأمين.",
      "لا نضمن دقة أو اكتمال المعلومات المقدمة من شركات التأمين.",
      "يجب مراجعة وثائق التأمين بعناية قبل الشراء والتأكد من فهم جميع الشروط والاستثناءات.",
    ],
  },
  {
    icon: XCircle,
    title: "حدود المسؤولية",
    content: [
      "لا نتحمل المسؤولية عن أي خسائر أو أضرار ناتجة عن استخدام الموقع.",
      "لا نضمن توفر أي منتج تأمين معين أو سعر محدد.",
      "لا نتحمل المسؤولية عن القرارات المتخذة بناءً على المعلومات المقدمة.",
      "مسؤوليتنا القصوى تقتصر على إعادة توجيهك لمصادر المعلومات الصحيحة.",
    ],
  },
  {
    icon: RefreshCw,
    title: "التزامات المستخدم",
    content: [
      "تقديم معلومات دقيقة وصحيحة عند طلب عروض الأسعار.",
      "عدم استخدام الموقع لأي أغراض غير قانونية أو احتيالية.",
      "عدم محاولة اختراق أو تعطيل الموقع أو أنظمته.",
      "احترام حقوق الملكية الفكرية للموقع ومحتواه.",
    ],
  },
  {
    icon: Scale,
    title: "القانون المعمول به",
    content: [
      "تخضع هذه الشروط والأحكام لقوانين المملكة العربية السعودية.",
      "أي نزاعات تنشأ عن استخدام الموقع تخضع للاختصاص القضائي للمحاكم السعودية.",
      "نلتزم بجميع اللوائح والأنظمة المعمول بها في المملكة العربية السعودية.",
    ],
  },
  {
    icon: FileText,
    title: "الملكية الفكرية",
    content: [
      "جميع المحتويات على الموقع (النصوص، الصور، الشعارات، التصميم) محمية بحقوق الملكية الفكرية.",
      "لا يجوز نسخ أو توزيع أو تعديل أي محتوى دون إذن كتابي مسبق.",
      "العلامات التجارية المذكورة هي ملك لأصحابها المعنيين.",
    ],
  },
  {
    icon: HelpCircle,
    title: "الاتصال والدعم",
    content: [
      "لأي استفسارات حول هذه الشروط، يرجى التواصل معنا عبر البريد الإلكتروني: legal@example.com",
      "للشكاوى والاقتراحات، يمكنك الاتصال على: 920 000 000",
      "نسعى للرد على جميع الاستفسارات خلال ٤٨ ساعة عمل.",
    ],
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-terms-title">
              الشروط والأحكام
            </h1>
            <p className="text-muted-foreground">
              آخر تحديث: يناير ٢٠٢٦
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed">
                مرحباً بك في "Care". تحدد هذه الشروط والأحكام القواعد والأنظمة لاستخدام موقعنا وخدماتنا. يرجى قراءة هذه الشروط بعناية قبل استخدام الموقع. باستخدامك لهذا الموقع، فإنك تقر بأنك قرأت وفهمت ووافقت على الالتزام بهذه الشروط والأحكام.
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

          {/* Important Notice */}
          <Card className="mt-8 border-amber-500/50 bg-amber-500/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">تنبيه مهم</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    هذا الموقع ليس شركة تأمين ولا وسيط تأمين مرخص. نحن نقدم خدمة مقارنة وتوصيل فقط. جميع منتجات التأمين تقدم من قبل شركات التأمين المرخصة من قبل البنك المركزي السعودي (ساما). يرجى التأكد من فهم جميع شروط وأحكام وثيقة التأمين قبل الشراء.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
