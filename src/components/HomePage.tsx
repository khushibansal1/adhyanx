import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
interface HomePageProps {
  onNavigate: (page: string, planType?: string) => void;
}
export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection onNavigate={onNavigate} />
    </div>
  );
}