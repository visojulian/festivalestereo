window.onload = () => {
  const cards = document.getElementsByClassName('card');

  for (const card of cards) {
    card.classList.add('shadow');
    card.classList.add('border-0');
  }
  $('.autoplay').slick({
    slidesToShow: 4,
    swipeToSlide: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.shows-autoplay').slick({
    slidesToShow: 6,
    pauseOnHover: false,
    swipeToSlide: true,
    pauseOnFocus: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    preletrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.shows-rtl-autoplay').slick({
    slidesToShow: 6,
    rtl: true,
    swipeToSlide: true,
    pauseOnHover: false,
    pauseOnFocus: false,
    initialSlide: 13,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  const grillas = document.querySelectorAll('.grilla-img');

  const openModal = (foto) => {
    let modal = document.createElement('div');
    let content = document.createElement('div');

    modal.classList.add('modal');
    content.classList.add('modal-content');

    content.appendChild(foto);
    modal.appendChild(content);

    modal.onclick = () => {
      modal.classList.remove('modal');
      modal.classList.add('display-none');
      modal.remove();
    }

    document.body.appendChild(modal);
  }

  grillas.forEach(foto => {
    foto.addEventListener('click', () => openModal(foto.cloneNode()));
  });
}




