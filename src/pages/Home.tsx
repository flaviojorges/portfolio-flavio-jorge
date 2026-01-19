import { Hero } from '../components/Hero';
import { LogoCarousel } from '../components/LogoCarousel';
import { Projects } from '../components/Projects';
import { UIDesignSection } from '../components/UIDesignSection';
import { PageTransition } from '../components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <main>
        <Hero />
        <LogoCarousel />
        <Projects />
        <UIDesignSection />
      </main>
    </PageTransition>
  );
}