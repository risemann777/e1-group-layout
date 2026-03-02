// Function to create a nested list from h2 and h3 elements
export default function createNestedListFromHeadings(container) {

  if (container instanceof HTMLElement) {
    // Get all h2 and h3 elements on the page
    const headings = container.querySelectorAll('h2, h3')

    if (headings && headings.length) {
      // Create the main unordered list
      const ul = document.createElement('ul')

      // Variables to track current h2 and its nested list
      let currentH2Item = null
      let currentH2SubList = null

      // Process each heading
      headings.forEach((heading, index) => {
        // Add ID to heading
        if (!heading.hasAttribute('id')) {
          heading.setAttribute('id', `chapterId_${index+1}`)
        }

        if (heading.tagName === 'H2') {
          // Create new h2 list item
          const h2Item = document.createElement('li')

          // Create link for h2 (optional - you can remove the anchor if not needed)
          const h2Link = document.createElement('a')
          h2Link.href = `#${heading.id || ''}`
          h2Link.textContent = heading.textContent
          h2Item.appendChild(h2Link)

          // Create nested ul for h3 children
          const subUl = document.createElement('ul')

          // Set as current h2
          currentH2Item = h2Item
          currentH2SubList = subUl

          // Append to main list
          ul.appendChild(h2Item)
          h2Item.appendChild(subUl)

        } else if (heading.tagName === 'H3' && currentH2Item) {
          // Create h3 list item inside current h2's nested list
          const h3Item = document.createElement('li')

          // Create link for h3 (optional)
          const h3Link = document.createElement('a')
          h3Link.href = `#${heading.id || ''}`
          h3Link.textContent = heading.textContent
          h3Item.appendChild(h3Link)

          // Add to current h2's nested list
          currentH2SubList.appendChild(h3Item)
        }
      })
      return ul
    } else {
      return null
    }
  } else {
    return null
  }
}