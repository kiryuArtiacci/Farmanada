import React from "react";
import Slider from "react-slick";
import imagen1 from "../../assets/IMAGE1.png";
import imagen2 from "../../assets/Loratadina.png";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const HeroData = [
    {
      id: 1,
      img: imagen1,
      subtitle: "Helado",
      title1: "Frigopie",
      title2: "Tio Rico",
      description: "Sabroso helado Frigopie de la marca Tio Rico",
    },
    {
      id: 2,
      img: imagen2,
      subtitle: "Medicina",
      title1: "Loratadina",
      title2: "Calox",
      description:
        "Medicina que los inteligentes asintomaticos utilizan hasta cuando les da catarro y por eso existen las superbacterias y ls gripes cada vez peor auxilio esto no es un meme",
    },
    {
      id: 3,
      img: imagen1,
      subtitle: "placeholder",
      title1: "goofy",
      title2: "aaah",
      description: "Lorem ipsum",
    },
  ];

  return (
    <div className="container">
      <div className="min-h-[55px] overflow-hidden rounded-3xl bg-slate-300 sm:min-h-[650px]">
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div className="relative z-10 order-2 flex flex-col justify-center gap-4 text-center sm:order-1 sm:pl-3 sm:pt-0 sm:text-left">
                    <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl">
                      {data.subtitle}
                    </h1>
                    <h1 className="text-5xl font-bold sm:text-6xl lg:text-7xl">
                      {data.title1}
                    </h1>
                    <h1 className="dark:text-white/g text-5xl font-bold uppercase text-white sm:text-[80px] md:text-[100px] xl:text-[150px]">
                      {data.title2}
                    </h1>
                  </div>
                  {/* Img section  */}
                  <div>
                    <div>
                      <img
                        src={data.img}
                        alt="lol"
                        className="mx-auto h-[300px] w-[300px] object-contain drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] sm:h-[540px] sm:scale-105 lg:scale-110"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
