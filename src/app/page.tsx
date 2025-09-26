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

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <div className="p-4 bg-[#FAF8F7]">
        <ChallanCheckForm />

        <BotBanner />
        <TrustedByMillions />
        <Testimonials />
        <HowItWorks />

        <TrustedPartner />
        <SupportedBy />
        <div>
          <LatestNews />
        </div>
        <CheckResolution />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
