import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Features from "../components/Features";
import TrendingProducts from "../components/TrendingProducts";
import OfferBanner from "../components/OfferBanner";
import LuxuryBrands from "../components/LuxuryBrands";
import Advantages from "../components/Advantages";
import Review from "../components/Review";
import VideoShowcase from "../components/VideoShowcase";
import Newsletter from "../components/Newsletter";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

function Home() {
  return (
    <main className="flex flex-col bg-[#030107] overflow-hidden">
      <Hero />
      <Advantages />
      <Categories />
      <TrendingProducts />
      <LuxuryBrands />
      <OfferBanner />
      <Features />
      <Review />
      <VideoShowcase />
      <Newsletter />
      <FAQ />
      <Footer/>
    </main>
  );
}

export default Home;