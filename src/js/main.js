import mobileDetect from "./lib/mobile-detect"
import lazyLoad from './modules/lazy-load.js'
import Modal from "./modules/modal"
import adjustViewportHeight from './lib/adjust-viewport-height.js'
import inputMask from './modules/inputMask.js'
import smoothScroll from './modules/smoothScroll.js'
import mainMenu from "./modules/main-menu.js"
import accordion from "./modules/accordion.js"

export {inputMask}

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body
  body.classList.add('page--loaded')

  if (mobileDetect()) {
    body.classList.add('bx-touch')
  } else {
    body.classList.add('bx-no-touch')
  }
  smoothScroll()
  lazyLoad()
  adjustViewportHeight()
  new Modal()
  inputMask()
  mainMenu()
  accordion()

  window.addEventListener('orientationchange', adjustViewportHeight)
})