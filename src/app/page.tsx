import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { HeroSection } from "./components/home-page/HeroSection";
import ChallanCheckForm from "./components/home-page/ChallanCheckForm";
import BotBanner from "./components/home-page/BotBanner";
import TrustedByMillions from "./components/home-page/TrustedByMillions";
import HowItWorks from "./components/home-page/HowItWorks";
import Testimonials from "./components/home-page/Testimonials";
import TrustedPartner from "./components/home-page/TrustedPartner";
import SupportedBy from "./components/home-page/SupportedBy";
import { LatestNews } from "./components/home-page/LatestNews";
import { CheckResolution } from "./components/home-page/CheckResolution";
import BlogsSection from "./components/home-page/BlogsSection";

function HomePage() {
  return (
    <>
      <Header />

      <HeroSection />

      <div className="p-4 bg-[#FAF8F7] lg:px-33 lg:bg-slate-50">
        <ChallanCheckForm />
        <BotBanner />
        <TrustedByMillions />
        <Testimonials />

        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div className="lg:flex lg:justify-around gap-4">
          <div className="lg:w-1/2 w-full">
            <TrustedPartner />
          </div>
          <div className="lg:w-1/2 w-full">
            <SupportedBy />
          </div>
        </div>

        <div className="bg-slate-50">
          <BlogsSection />
        </div>
        <div>
          <LatestNews />
        </div>
        <CheckResolution />
      </div>
      <div id="support">
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
