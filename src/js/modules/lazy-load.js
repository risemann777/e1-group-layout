export default function lazyLoad() {
  const images = document.querySelectorAll('img[data-src]')
  const videos = document.querySelectorAll('video')
  // const sources = document.querySelectorAll('picture source[data-srcset]')

  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const image = entry.target
          const sourcesElements = image.parentNode.querySelectorAll('source')

          if (sourcesElements) {
            sourcesElements.forEach(source => {
              if (source.dataset.srcset) source.srcset = source.dataset.srcset
            })
          }

          image.src = image.dataset.src
          observer.unobserve(image)
        }
      })
    }, { rootMargin: '50px 0px' })

    const videoObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const video = entry.target
          const { poster } = video.dataset

          if (poster) {
            video.poster = poster
          }
          observer.unobserve(video)
        }
      })
    }, {rootMargin: '50px 0px'})

    images.forEach(img => {
      imageObserver.observe(img)
    })

    videos.forEach(video => {
      videoObserver.observe(video)
    })
  } else {
    // Fallback for browsers that do not support IntersectionObserver
    images.forEach(img => {
      const sourcesElements = img.parentNode.querySelectorAll('source')

      sourcesElements.forEach(source => {
        source.srcset = source.dataset.srcset
      })

      img.src = img.dataset.src
    })
  }
}