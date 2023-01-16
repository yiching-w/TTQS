$(document).ready(function () {
  $('.carousel').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    accessibility: true
  });

  $('.carousel2').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.carousel3').slick({
    autoplay: true,
    autoplaySpeed: 300000,
    slidesToShow: 4,
    slidesToScroll: 3,
    dots: false,
    infinite: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });
})