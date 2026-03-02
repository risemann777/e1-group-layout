export default function smoothScroll(lenis) {
  const smoothLinks = document.querySelectorAll('a[data-smooth-scroll]')
  if (!smoothLinks) return false

  smoothLinks.forEach(link => {
    const id = link.getAttribute('href')
    const target = document.querySelector(id)

    if (id && target) {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        lenis.scrollTo(id)
      })
    }
  })
}
