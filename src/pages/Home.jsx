import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Features from "../components/Features";
import TrendingProducts from "../components/TrendingProducts";
import OfferBanner from "../components/OfferBanner";
import LuxuryBrands from "../components/LuxuryBrands";
import Advantages from "../components/Advantages";
import Review from "../components/Review";

function Home() {
  return (
    <main className="flex flex-col gap-12 md:gap-16">
      <Hero />
      <Advantages />
      <Categories />
      <TrendingProducts />
      <LuxuryBrands />
      <OfferBanner />
      <Features />
      <Review />
    </main>
  );
}

export default Home;
