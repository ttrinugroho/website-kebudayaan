$(document).ready(function () {
  $("#big-carousel").owlCarousel();
});
$('#big-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  navText: ['<span class="fz-85"><i class="bx bx-caret-left-circle"></i></span>',
    '<span class="fz-85"><i class="bx bx-caret-right-circle"></i></span>'
  ],
  responsive: {
    0: {
      items: 1,
      nav: true
    },
  }
})
$(document).ready(function () {
  $("#small-carousel").owlCarousel();
});
$('#small-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  navText: ['<span><i class="bx bxs-chevron-left" ></i></span>',
    '<span><i class="bx bxs-chevron-right"></i></span>'
  ],
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    768: {
      items: 3,
      nav: true
    }
  }
})

$(document).ready(function () {
  $(".tautan-carousel").owlCarousel();
});
$('.tautan-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  navText: ['<span><i class="bx bxs-chevron-left" ></i></span>',
    '<span><i class="bx bxs-chevron-right"></i></span>'
  ],
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    768: {
      items: 3,
      nav: true
    }
  }
})