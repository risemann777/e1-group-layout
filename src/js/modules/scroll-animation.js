export default function scrollAnimation() {
  if ('IntersectionObserver' in window) {
    const elements = document.querySelectorAll('.animation')
    const sections = document.querySelectorAll('.section__intersect')

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animation--execute')
        } else {
          // entry.target.classList.remove('animation--execute')
        }
      })
    }, { threshold: 1 })

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const section =  entry.target.closest('.section')
          if (section) entry.target.closest('.section').classList.add('section--intersected')
        }
      })
    }, { threshold: 1})

    elements.forEach(item => observer.observe(item))
    sections.forEach(item => sectionObserver.observe(item))
  }
}