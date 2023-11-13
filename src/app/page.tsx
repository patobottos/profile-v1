import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <div className="mb-auto mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-20 nmd:py-12 lg:px-24 lg:py-0 flex flex-col lg:flex-row">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:justify-between lg:py-24 lg:h-[800px]">
          <HeroSection />
        </header>
        <main className="pt-24 lg:w-1/2 lg:pb-12 flex flex-col justify-between">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}
