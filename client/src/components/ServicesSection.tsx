import { Car, Heart, Home, Plane, Shield, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Car,
    title: "تأمين السيارات",
    description: "حماية شاملة لسيارتك ضد الحوادث والسرقة والأضرار. تغطية ضد الغير أو تغطية شاملة حسب احتياجاتك.",
    features: ["تغطية ضد الغير", "تغطية شاملة", "مساعدة على الطريق"],
    color: "bg-blue-500",
  },
  {
    icon: Heart,
    title: "تأمين صحي",
    description: "رعاية صحية متكاملة لك ولعائلتك. شبكة واسعة من المستشفيات والعيادات المعتمدة.",
    features: ["تغطية علاجية شاملة", "شبكة مستشفيات واسعة", "خدمات طوارئ"],
    color: "bg-red-500",
  },
  {
    icon: Home,
    title: "تأمين المنازل",
    description: "احمِ منزلك ومحتوياته من المخاطر المختلفة. تغطية شاملة للحريق والسرقة والكوارث الطبيعية.",
    features: ["حماية من الحريق", "تغطية السرقة", "حماية المحتويات"],
    color: "bg-green-500",
  },
  {
    icon: Plane,
    title: "تأمين السفر",
    description: "سافر بأمان مع تغطية شاملة للطوارئ الطبية وإلغاء الرحلات وفقدان الأمتعة.",
    features: ["تغطية طبية دولية", "تعويض إلغاء الرحلات", "تغطية الأمتعة"],
    color: "bg-purple-500",
  },
  {
    icon: Shield,
    title: "تأمين الحياة",
    description: "اضمن مستقبل عائلتك المالي. حماية شاملة وادخار للمستقبل بخطط مرنة تناسب احتياجاتك.",
    features: ["حماية مالية للعائلة", "خطط ادخار", "تغطية مرنة"],
    color: "bg-amber-500",
  },
];

export function ServicesSection() {
  const scrollToQuote = () => {
    const element = document.getElementById("quote");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">
            خدمات التأمين الشاملة
          </h2>
          <p className="text-lg text-muted-foreground">
            نغطي جميع جوانب حياتك لضمان راحة بالك. اختر من باقاتنا المتنوعة ما يناسبك.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-elevate group"
              data-testid={`service-card-${index}`}
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 ${service.color} rounded-md flex items-center justify-center mb-4`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://zzser.com?label=fe9372ab1da7426e27a583d6f0b86deb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button 
                    variant="outline" 
                    className="w-full group"
                    data-testid={`button-service-quote-${index}`}
                  >
                    <span>طلب عرض سعر</span>
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-4 bg-muted/50 rounded-lg border">
          <p className="text-xs text-muted-foreground text-center">
            * الخدمات المذكورة أعلاه هي خدمات عامة وقد تختلف التغطية والشروط حسب الشركة المؤمنة. يرجى التواصل معنا للحصول على تفاصيل دقيقة حول التغطية والأسعار.
          </p>
        </div>
      </div>
    </section>
  );
}
