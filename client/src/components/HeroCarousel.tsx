import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Shield, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?w=1200&q=80",
    title: "Care أمانك ومستقبل عائلتك",
    subtitle: "نقدم لك أفضل حلول التأمين التي تناسب احتياجاتك وميزانيتك. حماية شاملة لك ولعائلتك وممتلكاتك.",
  },
  {
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
    title: "تأمين شامل بأسعار تنافسية",
    subtitle: "قارن بين أفضل شركات التأمين واحصل على العرض الأنسب لك. خدمة مجانية بالكامل.",
  },
  {
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
    title: "خدمة عملاء متميزة",
    subtitle: "فريقنا جاهز لمساعدتك على مدار الساعة. نضمن لك تجربة سلسة وسريعة.",
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
    <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/50 to-black/70 z-10" />
          <img
            src={slide.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 h-full flex items-center min-h-[600px] lg:min-h-[700px]">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full py-12">
          {/* Text Content */}
          <div className="text-white space-y-6">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">شريكك الموثوق في التأمين</span>
            </div>

            <h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              data-testid="text-hero-title"
            >
              {slides[currentSlide].title}
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-xl">
              {slides[currentSlide].subtitle}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4 pt-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-white/90">
                  <feature.icon className="w-5 h-5 text-accent" />
                  <span className="text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a 
                href="https://zzser.com?label=fe9372ab1da7426e27a583d6f0b86deb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="text-lg px-8"
                  data-testid="button-hero-cta"
                >
                  احصل على عرض سعر مجاني
                </Button>
              </a>
            </div>
          </div>

          {/* Stats Card */}
          <div className="hidden lg:flex justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <div className="text-center text-white space-y-2">
                <div className="text-5xl font-bold text-accent" data-testid="text-customers-count">+١٠,٠٠٠</div>
                <div className="text-lg">عملاء سعداء</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        data-testid="button-carousel-prev"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
        data-testid="button-carousel-next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/40"
            }`}
            data-testid={`button-carousel-dot-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
