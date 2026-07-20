import React from "react";

import Dior from "../assets/brands/dior.png";
import Chanel from "../assets/brands/chanel.png";
import TomFord from "../assets/brands/topford.png";
import Creed from "../assets/brands/creed.png";
import Versace from "../assets/brands/versace.png";
import Gucci from "../assets/brands/gucci.png";
import YSL from "../assets/brands/YSL.png";
import Armani from "../assets/brands/armani.png";
import Armaf from "../assets/brands/armaf.png";
import Lattafa from "../assets/brands/lattafa.png";
import Rasasi from "../assets/brands/rasasi.png";

const brands = [
  Dior,
  Chanel,
  TomFord,
  Creed,
  Versace,
  Gucci,
  YSL,
  Armani,
  Armaf,
  Lattafa,
  Rasasi,
  
];

function LuxuryBrands() {
  return (
  <section className="w-full overflow-hidden py-6 md:py-8 lg:py-10">
    <div className="overflow-hidden">
      <div className="marquee-track">
        {[...brands, ...brands, ...brands].map((logo, index) => (
          <div
            key={index}
            className="flex shrink-0 items-center justify-center px-2 sm:px-3 md:px-4 lg:px-5"
          >
            <img
              src={logo}
              alt="Brand Logo"
              draggable={false}
              className="pointer-events-none select-none object-contain
              h-12 w-24
              sm:h-14 sm:w-28
              md:h-16 md:w-32
              lg:h-18 lg:w-36
              xl:h-20 xl:w-40"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
}

export default LuxuryBrands;

