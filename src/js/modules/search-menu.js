import mainMenu from "./main-menu.js"

export default function searchMenu() {
  // console.log('Search menu')
  const body = document.body

  const classNames = {
    searchMenu: 'search-menu',
    searchForm: 'jsSearchForm',
    bodyMenuOpened: 'search-menu-opened',
    menuShow: 'search-menu--show',
  }

  const menu = body.querySelector(`.${classNames.searchMenu}`)
  const togglers = body.querySelectorAll(`[data-toggle="search"]`)
  const form = menu.querySelector(`.${classNames.searchForm}`)

  if (!menu) return console.warn(`Element with class "${classNames.searchMenu}" does not exist`)
  if (!togglers) return console.warn(`Elements with attribute [data-toggle="search"] does not exist`)

  if (menu && togglers) {
    togglers.forEach((toggler) => {
      toggler.addEventListener('click', () => {
        toggle()
      })
    })
  }

  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault()
      const input = form.querySelector('input')
      const value = input.value.trim()

      if (value.length > 0) {
        form.submit()
      } else {
        form.reset()
        close()
      }
    })
  }

  const menuIsVisible = () => {
    return menu.classList.contains(classNames.menuShow)
  }

  const close = () => {
    menu.classList.remove(classNames.menuShow)

    const timeOut = setTimeout(() => {
      menu.style.display = 'none'
      clearTimeout(timeOut)
    }, 100)
  }

  const open = () => {
    menu.style.display = 'block'

    const timeOut = setTimeout(() => {
      menu.classList.add(classNames.menuShow)
      clearTimeout(timeOut)
    }, 150)
  }

  const toggle = () => {
    console.log('toggle search')
    if (menuIsVisible()) {
      close()
    } else {
      open()
    }
  }

  // return { close, open, toggle }

  // mainMenu.close
}