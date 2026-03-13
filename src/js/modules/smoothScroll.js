export default function smoothScroll() {
  const smoothLinks = document.querySelectorAll('a[data-smooth-scroll]')
  if (!smoothLinks) return false

  smoothLinks.forEach(link => {
    const strId = link.getAttribute('href')
    const id = strId.includes('#') ? strId.substring(strId.indexOf('#')) : ''

    const target = document.querySelector(id)

    if (id && target) {
      link.addEventListener('click', (e) => {
        e.preventDefault()
        target.scrollIntoView({ behavior: 'smooth' })
      })
    }
  })
}
