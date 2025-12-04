import React from "react";

const Hero = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-500 py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Hero Text */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          {title}
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-indigo-100 max-w-3xl drop-shadow-md">
          {subtitle}
        </p>

        {/* Optional CTA Button */}
        {ctaText && ctaLink && (
          <a
            href={ctaLink}
            className="mt-8 inline-block bg-white text-indigo-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
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
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
