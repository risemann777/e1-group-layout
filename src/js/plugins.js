import Swiper from "swiper"
import {Navigation, Pagination, Autoplay, FreeMode} from 'swiper/modules'
import { Fancybox } from '@fancyapps/ui'
import inputMask from "./modules/inputMask.js"

document.addEventListener('DOMContentLoaded', () => {

  const newsSlider = document.querySelector('.news__slider')

  if (newsSlider) {
    new Swiper(".news__slider", {
      modules: [Navigation],
      slidesPerView: "auto",
      spaceBetween: 16,
      navigation: {
        nextEl: '.news__nav-next',
        prevEl: '.news__nav-prev',
      },
      breakpoints: {
        1280: {
          slidesPerView: 3,
        },
        1600: {
          slidesPerView: 4,
        }
      }
    })
  }

  const alikeProductSlider = document.querySelectorAll('.alike-product__slider')

  if (alikeProductSlider) {
    new Swiper(".alike-product__slider", {
      modules: [Pagination],
      spaceBetween: 0,
      pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        }
      }
    })
  }

  const reviewSlider = document.querySelectorAll('.review__slider')

  if (reviewSlider) {
    new Swiper(".review__slider", {
      modules: [Pagination],
      slidesPerView: 1,
      centeredSlides: false,
      spaceBetween: 40,
      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints: {
        720: {
          spaceBetween: 80,
          slidesPerView: "auto",
          centeredSlides: true,
        },
        1024: {
          spaceBetween: 100,
          slidesPerView: "auto",
          centeredSlides: true,
        }
      }
    })
  }

  const gallerySliders = document.querySelectorAll('.gallery-slider')

  if (gallerySliders) {
    gallerySliders.forEach(slider => {
      new Swiper(slider, {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    })
  }

  const engineeringSlider = document.querySelectorAll('.engineering__slider')

  if (engineeringSlider) {
    new Swiper('.engineering__slider', {
      modules: [Pagination, Autoplay],
      slidesPerView: "auto",
      spaceBetween: 20,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true
      },
      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints: {
        1280: {
          spaceBetween: 40,
          slidesPerView: "auto",
        }
      }
    })
  }

  const extraConfigSlider = document.querySelectorAll('.extra-config__slider')

  if (extraConfigSlider) {
    new Swiper('.extra-config__slider', {
      modules: [Pagination, Autoplay],
      slidesPerView: "auto",
      spaceBetween: 24,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1280: {
          spaceBetween: 40,
          slidesPerView: "auto",
        }
      }
    })
  }

  const sliders = document.querySelectorAll('.slider')

  if (sliders) {
    sliders.forEach(slider => {
      new Swiper(slider, {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,
        autoplay: {
          delay: 5000,
          disableOnInteraction: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })
    })
  }

  const modelDesign = document.querySelector('.model-design')

  if (modelDesign) {
    const modelSliderEl = modelDesign.querySelector('.model-slider')
    const buttons = modelDesign.querySelectorAll('.btn-plus')

    if (modelSliderEl  && buttons) {
      const modelSlider = new Swiper(modelSliderEl, {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,
        spaceBetween: 20,
        autoplay: {
          delay: 5000,
          disableOnInteraction: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        on: {
          init: function (e) {
            buttons.forEach(button => {
              if(button.classList.contains('btn-plus--active')) {
                button.classList.remove('btn-plus--active')
              }
            })
            buttons[e.realIndex].classList.add('btn-plus--active')
          },
        },
      })

      modelSlider.on('slideChange', (e) => {
        buttons.forEach(button => {
          if(button.classList.contains('btn-plus--active')) {
            button.classList.remove('btn-plus--active')
          }
        })
        buttons[e.realIndex].classList.add('btn-plus--active')
      })

      buttons.forEach(button => {
        const { slideTo } = button.dataset
        button.addEventListener('click', () => {
          modelSlider.slideTo(slideTo)
        })
      })
    }
  }

  const cabinSlider = document.querySelector('.cabin-slider')

  if (cabinSlider) {
    new Swiper(cabinSlider, {
      slidesPerView: "auto",
      spaceBetween: 20,
      breakpoints: {
        1024: {
          slidesPerView: 5,
        }
      }
    })
  }

  const cabinDesignSlider = document.querySelectorAll('.cabin-design-slider')

  if (cabinDesignSlider) {
    cabinDesignSlider.forEach(slider => {
      new Swiper(slider, {
        slidesPerView: "auto",
        spaceBetween: 20,
        breakpoints: {
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          720: {
            spaceBetween: 40,
            slidesPerView: 2,
          },
        }
      })
    })
  }

  Fancybox.bind("[data-fancybox]", {})
  inputMask()
})