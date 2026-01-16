import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { StatsSection } from "@/components/StatsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { QuoteForm } from "@/components/QuoteForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroCarousel />
        <StatsSection />
        <ServicesSection />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}
