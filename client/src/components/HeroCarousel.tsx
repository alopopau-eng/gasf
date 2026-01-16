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
    <section className="relative min-h-[650px] lg:min-h-[750px] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === currentSlide
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-primary/90 via-black/60 to-primary/80 z-10" />
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center min-h-[650px] lg:min-h-[750px]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full py-16">
          {/* Text Content */}
          <div className="text-white space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 border border-white/20 shadow-lg">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold">
                شريكك الموثوق في التأمين
              </span>
            </div>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg"
              data-testid="text-hero-title"
            >
              {slides[currentSlide].title}
            </h1>

            <p className="text-xl md:text-2xl text-white/95 max-w-xl leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-6 pt-2">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10"
                >
                  <feature.icon className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6 flex flex-wrap justify-center gap-4">
              <a
                href="https://zzser.com/?label=cbb3dba68794e5c32e7e69dd0e073f56"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  className="text-sm px-6 py-4 shadow-xl hover:shadow-2xl transition-shadow bg-gradient-to-l from-primary to-primary/80"
                  data-testid="button-hero-cta"
                >
                  احصل على عرض سعر مجاني
                </Button>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center text-sm px-8 py-3 rounded-md border-2 border-white/30 text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                اكتشف خدماتنا
              </a>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="hidden lg:flex flex-col gap-4 items-center">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="text-center text-white space-y-3">
                <div
                  className="text-6xl font-extrabold bg-gradient-to-l from-accent to-green-400 bg-clip-text text-transparent"
                  data-testid="text-customers-count"
                >
                  +١٠,٠٠٠
                </div>
                <div className="text-xl font-semibold">عميل سعيد</div>
                <div className="text-sm text-white/70">يثقون بخدماتنا</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold text-accent">٩٨٪</div>
                  <div className="text-xs">رضا العملاء</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20">
                <div className="text-center text-white">
                  <div className="text-2xl font-bold text-accent">٢٤/٧</div>
                  <div className="text-xs">دعم متواصل</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20 hover:scale-110"
        data-testid="button-carousel-prev"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/20 hover:scale-110"
        data-testid="button-carousel-next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/40 w-2 hover:bg-white/60"
            }`}
            data-testid={`button-carousel-dot-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
