import mobileDetect from './mobile-detect.js'

export default function adjustViewportHeight() {
  const layout = document.querySelector('.layout')

  if (!layout) {
    console.warn(`No layout element was found.`)
    return
  }

  if (mobileDetect()) {
    layout.style.setProperty('--mi-viewport-height', `${window.innerHeight}px`)
  }
}
