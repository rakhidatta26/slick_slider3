
$(document).ready(function(){
	 $(".wrapper").slick({
    speed: 500,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    responsive: [
      
      {
        breakpoint: 767,
        settings: {
            slidesToShow: 2
        },
      },
      {
        breakpoint: 575,
        settings: {
            slidesToShow: 1
        },
      },
    ],
  });
});

