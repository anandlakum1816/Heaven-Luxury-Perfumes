import React from "react";

import original from "../assets/images/orignal_product.png";
import freeDelivery from "../assets/images/free_delivery.png";
import expressDelivery from "../assets/images/express_delivery.png";
import exchange from "../assets/images/easy_exchange.png";
import secure from "../assets/images/secure_payment.png";
import leading from "../assets/images/leading_product.png";

const items = [
  original,
  freeDelivery,
  expressDelivery,
  exchange,
  secure,
  leading,
];

function Advantages() {
  return (
 <section className="w-full bg-transparent pt-0 pb-4 md:pb-6">
  {/* Mobile Slider */}
  <div className="overflow-x-auto scrollbar-hide md:hidden">
    <div className="flex w-max items-center gap-4 px-4">
      {items.map((image, index) => (
        <div
          key={index}
          className="flex h-[80px] w-[120px] flex-shrink-0 items-center justify-center"
        >
          <img
            src={image}
            alt={`Advantage ${index + 1}`}
            draggable={false}
            className="max-h-[70px] max-w-[110px] object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>
      ))}
    </div>
  </div>

  {/* Desktop */}
  <div className="hidden md:flex flex-wrap items-center justify-center gap-5">
    {items.map((image, index) => (
      <div
        key={index}
        className="flex h-[90px] w-[140px] items-center justify-center"
      >
        <img
          src={image}
          alt={`Advantage ${index + 1}`}
          draggable={false}
          className="max-h-[90px] max-w-[130px] object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>
    ))}
  </div>
</section>
  );
}

export default Advantages;