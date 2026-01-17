import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Shield,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?w=1200&q=80",
    title: "Care أمانك ومستقبل عائلتك",
    subtitle:
      "نقدم لك أفضل حلول التأمين التي تناسب احتياجاتك وميزانيتك. حماية شاملة لك ولعائلتك وممتلكاتك.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
    title: "تأمين شامل بأسعار تنافسية",
    subtitle:
      "قارن بين أفضل شركات التأمين واحصل على العرض الأنسب لك. خدمة مجانية بالكامل.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
    title: "خدمة عملاء متميزة",
    subtitle:
      "فريقنا جاهز لمساعدتك على مدار الساعة. نضمن لك تجربة سلسة وسريعة.",
  },
];

const features = [
  { icon: CheckCircle, text: "سهولة المطالبات" },
  { icon: Clock, text: "دعم فني ٢٤/٧" },
  { icon: Shield, text: "تغطية شاملة" },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToQuote = () => {
    const element = document.getElementById("quote");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
  <section className="relative overflow-hidden">
  <div className="grid grid-cols-1 md:grid-cols-3 min-h-[650px]">
    {slides.map((slide, index) => (
      <div key={index} className="relative">
        <div className="absolute inset-0 bg-gradient-to-l from-primary/80 via-black/60 to-primary/80 z-10" />
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 text-white">
          <h2 className="text-3xl font-extrabold mb-4">
            {slide.title}
          </h2>
          <p className="text-lg text-white/90">
            {slide.subtitle}
          </p>
        </div>
      </div>
    ))}
  </div>
    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex gap-4">
  {slides.map((slide, index) => (
    <button
      key={index}
      onClick={() => goToSlide(index)}
      className={`relative w-24 h-16 overflow-hidden rounded-lg border-2 transition-all ${
        index === currentSlide
          ? "border-white scale-105"
          : "border-white/40 opacity-70"
      }`}
    >
      <img
        src={slide.image}
        alt=""
        className="w-full h-full object-cover"
      />
    </button>
  ))}
</div>

</section>

  );
}
