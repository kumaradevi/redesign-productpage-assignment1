import React, { useEffect, useRef } from 'react';
import HeroSection from '@/views/Home/components/HeroSection';
import FeaturesGrid from '@/views/Home/components/FeaturesGrid';
import MainFooter from '@/views/Home/components/MainFooter';
import ContactForm from '@/views/Home/components/ContactForm';
import FullPageSections from '@/views/Home/components/InfoSection';
import FAQ from '@/views/Home/components/HomeFAQ';
import ClaimLandingSection from '@/views/Home/components/ClaimLandingSection';
import { useSearchParams } from 'react-router-dom';


const Home = () => {
  const featuresRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const [searchParams] = useSearchParams();

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const scrollTo = searchParams.get('scrollTo');
    if (scrollTo) {
      switch (scrollTo) {
        case 'About Us':
          scrollToSection(aboutRef);
          break;
        case 'Features':
          scrollToSection(featuresRef);
          break;
        case 'Contact':
          scrollToSection(contactRef);
          break;
        default:
          break;
      }
    }
  }, [searchParams]);
  return (
    <div>
      <HeroSection
        scrollToSection={scrollToSection}
        featuresRef={featuresRef}
        contactRef={contactRef}
        aboutRef={aboutRef}
      />
     <ClaimLandingSection/>
      <FeaturesGrid/>
      <FullPageSections/>
     <FAQ/>
      <ContactForm/>
      <MainFooter/>
    </div>
  );
};

export default Home;
