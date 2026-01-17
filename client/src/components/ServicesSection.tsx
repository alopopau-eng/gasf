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
  return (
    <section id="services" className="py-20 lg:py-28 bg-gradient-to-b from-transparent via-muted/20 to-transparent">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">خدماتنا المتميزة</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-foreground mb-6" data-testid="text-services-title">
            خدمات التأمين الشاملة
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            نغطي جميع جوانب حياتك لضمان راحة بالك. اختر من باقاتنا المتنوعة ما يناسبك.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden bg-background"
              data-testid={`service-card-${index}`}
            >
              <div className={`h-2 ${service.color}`} />
              <CardHeader className="pb-4 pt-8">
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 pb-8">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 text-foreground">
                      <div className={`w-2 h-2 ${service.color} rounded-full`} />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href="https://zzser.com?label=fe9372ab1da7426e27a583d6f0b86deb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block pt-2"
                >
                  <Button 
                    className="w-full group/btn"
                    data-testid={`button-service-quote-${index}`}
                  >
                    <span>طلب عرض سعر</span>
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover/btn:-translate-x-1 transition-transform" />
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
