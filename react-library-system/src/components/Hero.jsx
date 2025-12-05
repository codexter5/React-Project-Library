import React from "react";

const Hero = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="relative bg-gradient-to-r from-amber-200 via-amber-100 to-amber-50 py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Hero Text */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold text-amber-900 drop-shadow-md">
          {title}
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-amber-700 max-w-3xl drop-shadow-sm">
          {subtitle}
        </p>

        {/* Optional CTA Button */}
        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            className="mt-8 inline-block bg-amber-900 text-amber-50 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-amber-700 transition duration-300"
          >
            {ctaText}
          </a>
        )}
      </div>

      {/* Decorative SVG or Shape at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1440 100"
          className="w-full h-20"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z"
            className="fill-amber-50"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
