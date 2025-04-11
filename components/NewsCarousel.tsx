// components/NewsCarousel.tsx
import React from "react";
import Slider from "react-slick";
import { newsItems } from "../data/newsItems"; // adjust the path as necessary

const NewsCarousel: React.FC = () => {
  // react-slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3, // Scroll 3 at once
    autoplay: true,
    autoplaySpeed: 7000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2, // match slidesToShow
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1, // match slidesToShow
        },
      },
    ],
  };

  return (
    <section id="news" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl mb-10 text-left">
          Fresh from MerryQuery!
        </h2>

        <Slider {...settings}>
          {newsItems.map((item, index) => (
            <div key={index} className="px-2 pb-2">
              <div className="h-full rounded-lg bg-white shadow p-4 flex flex-col justify-between">
                <p className="text-xs uppercase text-gray-500 font-medium tracking-wide mb-2">
                  {item.date}
                </p>
                <div className="flex items-center space-x-2 mb-3">
                  <span role="img" aria-label={item.title} className="text-xl">
                    {item.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600">{item.content}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default NewsCarousel;
