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
const BIO_LINK =
  "https://zzser.com?label=fe9372ab1da7426e27a583d6f0b86deb";
  return (
 <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {slides.map((slide, index) => (
          <a
            key={index}
            href={BIO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl shadow-xl border border-white/10"
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-l from-primary via-black/20 to-primary z-10 transition-opacity group-hover:opacity-90" />

            {/* Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-extrabold mb-2">
                {slide.title}
              </h3>
              <p className="text-sm text-white/90 leading-relaxed">
                {slide.subtitle}
              </p>

              <span className="mt-4 inline-block text-sm font-semibold text-teal-300">
                اضغط للحصول على عرض سعر →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>

  );
}
