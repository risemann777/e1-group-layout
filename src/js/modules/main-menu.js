export default function mainMenu() {
  const body = document.body
  const classNames = {
    fullMenu: 'full-menu',
    fullMenuWrapper: 'full-menu__wrapper',
    hamburger: 'hamburger',
    bodyMenuOpened: 'full-menu-opened',
    menuShow: 'full-menu--show',
    mobileNav: 'mobile-nav',
    mobileNavItem: 'mobile-nav__item',
    mobileNavItemActive: 'mobile-nav__item--active',
    mobileNavItemHead: 'mobile-nav__head',
    mobileNavToggle: 'mobile-nav__toggle',
    mobileNavSub: 'mobile-nav__sub',
  }
  const fullMenu = body.querySelector(`.${classNames.fullMenu}`)
  const hamburgers = body.querySelectorAll(`.${classNames.hamburger}`)

  if (!fullMenu) return console.warn(`Element with class "${classNames.fullMenu}" does not exist`)
  if (!hamburgers) return console.warn(`Element(s) with class "${classNames.hamburger}" does not exist`)

  hamburgers.forEach(hamburger => {
    hamburger.addEventListener('click', () => {
      toggle()
    })
  })

  const switchBodyOverflow = (fixed) => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    if (fixed) {
      if (scrollbarWidth) body.style.paddingRight = scrollbarWidth + 'px'
      body.style.overflow = 'hidden'
      body.classList.add(classNames.bodyMenuOpened)
    } else {
      if (body.style.paddingRight) {
        body.style.removeProperty('padding-right')
      }
      body.style.removeProperty('overflow')
      body.classList.remove(classNames.bodyMenuOpened)
    }
  }

  const menuIsVisible = () => {
    return fullMenu.classList.contains(classNames.menuShow)
  }

  const close = () => {
    fullMenu.classList.remove(classNames.menuShow)

    setTimeout(() => {
      fullMenu.style.display = 'none'
      switchBodyOverflow(false)
    }, 300)
  }

  const open = () => {
    fullMenu.style.display = 'block'
    switchBodyOverflow(true)

    setTimeout(() => {
      fullMenu.classList.add(classNames.menuShow)
    }, 150)
  }

  const toggle = () => {
    if(menuIsVisible()) {
      close()
    } else {
      open()
    }
  }

  const mobileNavItems = fullMenu.querySelectorAll(`.${classNames.mobileNavItem}`)

  if (mobileNavItems) {
    mobileNavItems.forEach(item => {
      const toggle = item.querySelector(`.${classNames.mobileNavToggle}`)
      const sub = item.querySelector(`.${classNames.mobileNavSub}`)

      if (toggle && sub) {
        toggle.addEventListener('click', () => {
          item.classList.toggle(`${classNames.mobileNavItemActive}`)

          if (item.classList.contains(classNames.mobileNavItemActive)) {
            sub.style.display = `block`
            const height = sub.offsetHeight
            sub.style.height = 0

            setTimeout(() => {
              sub.style.height = `${height}px`
            }, 5)
          } else {
            sub.style.height = 0
            setTimeout(() => {
              sub.removeAttribute("style")
            }, 300)
          }
        })
      }
    })
  }
}