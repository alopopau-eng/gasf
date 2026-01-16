import { Users, Award, Clock, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "+٥٠٠٠",
    label: "عميل يثق بنا",
    description: "تم خدمتهم بنجاح",
  },
  {
    icon: Award,
    value: "٩٨٪",
    label: "نسبة رضا العملاء",
    description: "بناءً على استبيانات العملاء",
  },
  {
    icon: Clock,
    value: "٢٤/٧",
    label: "دعم فني متواصل",
    description: "نحن هنا دائماً لمساعدتك",
  },
  {
    icon: Star,
    value: "٤.٩",
    label: "تقييم العملاء",
    description: "من أصل ٥ نجوم",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-3">أرقامنا تتحدث عن نفسها</h2>
          <p className="text-muted-foreground">نفخر بثقة عملائنا وتميز خدماتنا</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center space-y-4 p-8 bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              data-testid={`stat-card-${index}`}
            >
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl lg:text-4xl font-extrabold bg-gradient-to-l from-primary to-accent bg-clip-text text-transparent" data-testid={`stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-base font-semibold text-foreground">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
