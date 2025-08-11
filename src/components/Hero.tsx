import SearchBar from "./SearchBar";
import heroImage from "@/assets/hero-image.jpg";
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          
          <SearchBar />
        </div>
      </div>
    </section>
  );
};

export default Hero;