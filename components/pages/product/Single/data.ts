export const sliderSettings = {
  dots: true,
  infinite: true,
  arrows: true,
  speed: 100,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        centerMode: true,
        arrows: false,
      },
    },
    {
      breakpoint: 1096,
      settings: {
        slidesToShow: 3,
        centerMode: true,
        arrows: false,
      },
    },
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        arrows: false,
      },
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        arrows: false,
      },
    },
  ],
};
