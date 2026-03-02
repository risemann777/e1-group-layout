const loadMore = () => {

  const execute = () => {
    const buttons = document.querySelectorAll('[data-load-url]')

    if (buttons.length === 0) return false

    buttons.forEach(button => {
      button.addEventListener('click', async () => {
        const {loadUrl} = button.dataset
        const wrapper = button.closest('[data-load-wrapper]')

        if (loadUrl && wrapper) {
          await fetch(loadUrl).then(response => {
            if (response && response.status === 200) {return response.text()}
          }).then(text => {
            const parser = new DOMParser()
            const html = parser.parseFromString(text, 'text/html')

            if (html) {
              const wrapperID = wrapper.id
              const listContainer = wrapper.querySelector('[data-load-list]')
              const loadButton = wrapper.querySelector('[data-load-button]')

              if (wrapperID && listContainer) {
                const loadedWrapper = html.querySelector(`#${wrapperID}`)

                if (loadedWrapper) {
                  const loadedItems = loadedWrapper.querySelectorAll('[data-load-item]')
                  const loadedButton = loadedWrapper.querySelector('[data-load-button]')

                  if (loadedItems.length === 0) return false

                  loadedItems.forEach((item) => {
                    listContainer.append(item)
                  })

                  if (loadButton) {
                    loadButton.remove()
                  }

                  if (loadedButton) {
                    wrapper.append(loadedButton)
                    execute()
                  }
                }
              }
            }
          }).catch(e => {console.log(e)})
        }
      })
    })
  }
  execute()
}

export default loadMore