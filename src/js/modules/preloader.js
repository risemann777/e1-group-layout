export default function preloader() {
  const loader = document.querySelector('.preloader')

  if (!loader) {
    console.warn('preloader element not found')
    return
  }

  window.addEventListener('load', () => {
    loader.classList.remove('preloader--show')
    setTimeout(() => { loader.remove() }, 200)
  })
}