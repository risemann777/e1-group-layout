import mobileDetect from "./lib/mobile-detect"
import lazyLoad from './modules/lazy-load.js'
import Modal from "./modules/modal"
import adjustViewportHeight from './lib/adjust-viewport-height.js'
import inputMask from './modules/inputMask.js'

export {inputMask}

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body
  body.classList.add('page--loaded')

  if (mobileDetect()) {
    body.classList.add('page--mobile')
  } else {
    body.classList.add('page--desktop')
  }

  lazyLoad()
  // adjustViewportHeight()
  new Modal()
  inputMask()

  window.addEventListener('orientationchange', adjustViewportHeight)
})