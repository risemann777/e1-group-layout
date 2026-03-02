import createNestedListFromHeadings from "../lib/create-nested-list-from-headings.js"

export default function tableOfContents(container, options) {
  const wrapper = document.querySelector(container)

  if (!wrapper) return false

  const tocPlace = wrapper.querySelector(options?.tocPlace)
  const tocSource = wrapper.querySelector(options?.tocSource)

  if (!tocPlace || !tocSource) return false

  const tocList = createNestedListFromHeadings(tocSource)

  if (tocList) {
    // Create block for table of contents
    const tocBlock = document.createElement("div")
    tocBlock.className = 'table-of-contents'

    // Create title for Table of contents
    const tocTitle = document.createElement("div")
    tocTitle.className = 'table-of-contents__title'
    tocTitle.textContent = 'Содержание'
    tocBlock.appendChild(tocTitle)

    // Create wrapper for inserting tocList
    const tocWrapper = document.createElement("div")
    tocWrapper.className = 'table-of-contents__wrapper'
    tocBlock.appendChild(tocWrapper)

    // Insert created tocList into wrapper
    tocWrapper.appendChild(tocList)

    // Append tocBlock into its place
    tocPlace.appendChild(tocBlock)

    const tocLinks = tocBlock.querySelectorAll('a')

    tocLinks.forEach((tocLink) => {
      const id = tocLink.getAttribute('href')
      const target = tocSource.querySelector(id)

      if (id && target) {
        tocLink.addEventListener('click', (e) => {
          e.preventDefault()
          target.scrollIntoView({ behavior: 'smooth' })
        })
      }
    })
  }
}