import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { HeroSection } from "./components/common/home-page/HeroSection";
import ChallanCheckForm from "./components/common/home-page/ChallanCheckForm";
import BotBanner from "./components/common/home-page/BotBanner";
import TrustedByMillions from "./components/common/home-page/TrustedByMillions";
import HowItWorks from "./components/common/home-page/HowItWorks";
import Testimonials from "./components/common/home-page/Testimonials";
import TrustedPartner from "./components/common/home-page/TrustedPartner";
import SupportedBy from "./components/common/home-page/SupportedBy";
import { LatestNews } from "./components/common/home-page/LatestNews";
import { CheckResolution } from "./components/common/home-page/CheckResolution";

function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <div className="p-4 bg-[#FAF8F7]">
        <ChallanCheckForm />
        <BotBanner />
        <TrustedByMillions />
        <HowItWorks />
        <Testimonials />
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
