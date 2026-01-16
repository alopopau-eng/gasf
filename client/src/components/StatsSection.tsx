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
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center space-y-3 p-6 bg-background rounded-lg border hover-elevate"
              data-testid={`stat-card-${index}`}
            >
              <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-foreground" data-testid={`stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
