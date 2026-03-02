export default function floatingHeader(arg= {}) {
  const header = document.querySelector('.header')

  if (!header) return console.warn(`Element width class "header" not found`)

  const classNames = {
    floating: 'header--floating',
    hidden: 'header--hidden',
    sticky: 'header--sticky',
    fixed: 'header--fixed',
    fill: 'header--fill',
    fillShow: 'header--fill-show',
    gradient: 'header--gradient',
    gradientShow: 'header--gradient-show',
  }

  const params = arg || {}

  if (params?.isFloating && (header.classList.contains(classNames.sticky) || header.classList.contains(classNames.fixed))) {
    header.classList.add(classNames.floating)

    let lastScrollPosition = window.scrollY
    let upScrollDiff = 0

    const doFloat = (scrollPos) => {
      if (header) {
        let direction

        if (scrollPos === 0 && header.classList.contains(classNames.hidden)) {
          header.classList.remove(classNames.hidden)
        }

        if (header.classList.contains(classNames.gradient)) {
          if (scrollPos >= 300) {
            header.classList.add(classNames.gradientShow)
          } else {
            header.classList.remove(classNames.gradientShow)
          }
        }

        if (lastScrollPosition < scrollPos) {
          direction = 'down'
          upScrollDiff = 0
        } else {
          direction = 'up'
          upScrollDiff += lastScrollPosition - scrollPos
        }

        if (direction === 'down' && scrollPos >= 100) {
          if (!header.classList.contains(classNames.hidden)) {
            header.classList.add(classNames.hidden)
          }
        }

        if (direction === 'up' && upScrollDiff >= 150) {
          if (header.classList.contains(classNames.hidden)) {
            header.classList.remove(classNames.hidden)
          }
        }
      }
    }

    window.addEventListener('load', () => {
      if (header && header.classList.contains(classNames.hidden) && window.scrollY <= 10) {
        setTimeout(() => {
          header.classList.remove(classNames.hidden)
        }, 500)
      }
    })

    window.addEventListener('scroll', () => {
      doFloat(window.scrollY)
      lastScrollPosition = window.scrollY
    })
  }
}