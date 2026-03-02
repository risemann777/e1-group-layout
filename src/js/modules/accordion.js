const accordion = () => {
  const accordionNodeList = document.querySelectorAll('.accordion')
  const classes = {
    expanded: 'accordion__item--expanded',
    item: 'accordion__item',
    body: 'accordion__body'
  }

  if (accordionNodeList) {
    accordionNodeList.forEach((wrapper) => {
      const items = wrapper.querySelectorAll(`.${classes.item}`)
      if (items) {
        items.forEach((item) => {
          const itemBody = item.querySelector(`.${classes.body}`)

          item.addEventListener('click', () => {
            item.classList.toggle(`${classes.expanded}`)

            if (item.classList.contains(classes.expanded)) {
              itemBody.style.display = `block`
              const height = itemBody.offsetHeight
              itemBody.style.height = 0

              setTimeout(() => {
                itemBody.style.height = `${height}px`
              }, 5)
            } else {
              itemBody.style.height = 0
              itemBody.style.opacify = 0

              setTimeout(() => {
                itemBody.removeAttribute("style")
              }, 300)
            }
          })
        })
      }
    })
  }
}

export default accordion