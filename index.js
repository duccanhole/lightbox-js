const containerTemplate =
  `
<!--<div id="lightbox-modal" class="lightbox-container" style="display: block">-->
  <div class="lightbox-action-container">
    <button
      id="lightbox-action-download"
      class="lightbox-action-btn"
      style="display: none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#e8eaed"
      >
        <path
          d="M480-322.87 268.52-534.35l63.89-65.41L434.5-497.44v-310.69h91v310.69l102.09-102.32 63.89 65.41L480-322.87Zm-237.13 171q-37.78 0-64.39-26.61t-26.61-64.39v-120h91v120h474.26v-120h91v120q0 37.78-26.61 64.39t-64.39 26.61H242.87Z"
        />
      </svg>
    </button>
    <button
      id="lightbox-action-rotate"
      class="lightbox-action-btn"
      style="display: none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#e8eaed"
      >
        <path
          d="M522-69.48v-93q33.28-4.76 65.18-17.52 31.91-12.76 60.67-33.52l64.13 65.65q-42.24 33.44-90.03 53.41-47.8 19.98-99.95 24.98Zm-80 0Q300.65-87.72 207.26-191.49q-93.39-103.77-93.39-243.88 0-75.96 28.5-142.77 28.5-66.82 77.36-116.63 48.86-49.82 114.72-79.03 65.85-29.22 141.57-29.22h5.05l-57.22-57.46 63.65-65.17L655.15-758 487.5-590.35 423.85-654l58.02-58.02h-6.57q-113.89 0-192.16 81.5t-78.27 195.15q0 102.57 67.04 179.99 67.05 77.42 170.09 92.9v93Zm327.98-136.15-65.89-63.89q20.76-28.76 33.52-60.55 12.76-31.78 17.76-65.3h92.76q-5 51.67-24.98 99.23-19.98 47.55-53.17 90.51Zm78.15-269.74h-92.76q-5.24-33.52-18-65.54t-33.52-60.79l66.13-63.17q33.43 40.44 53.03 88.87 19.6 48.43 25.12 100.63Z"
        />
      </svg>
    </button>
    <button
      id="lightbox-action-zoom"
      class="lightbox-action-btn"
      style="display: none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#e8eaed"
      >
        <path
          d="M783.52-110.91 529.85-364.59q-29.76 23.05-68.64 36.57-38.88 13.52-83.12 13.52-111.16 0-188.33-77.17-77.17-77.18-77.17-188.33t77.17-188.33q77.17-77.17 188.33-77.17 111.15 0 188.32 77.17 77.18 77.18 77.18 188.33 0 44.48-13.52 83.12-13.53 38.64-36.57 68.16l253.91 254.15-63.89 63.66ZM378.09-405.5q72.84 0 123.67-50.83 50.83-50.82 50.83-123.67t-50.83-123.67q-50.83-50.83-123.67-50.83-72.85 0-123.68 50.83-50.82 50.82-50.82 123.67t50.82 123.67q50.83 50.83 123.68 50.83Zm-40-55.93V-540h-78.57v-80h78.57v-78.57h80V-620h78.56v80h-78.56v78.57h-80Z"
        />
      </svg>
    </button>
    <button
      id="lightbox-action-reset"
      class="lightbox-action-btn"
      style="display: none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#e8eaed"
      >
        <path
          d="M783.52-110.91 529.85-364.59q-29.76 23.05-68.64 36.57-38.88 13.52-83.12 13.52-111.16 0-188.33-77.17-77.17-77.18-77.17-188.33t77.17-188.33q77.17-77.17 188.33-77.17 111.15 0 188.32 77.17 77.18 77.18 77.18 188.33 0 44.48-13.52 83.12-13.53 38.64-36.57 68.16l253.91 254.15-63.89 63.66ZM378.09-405.5q72.84 0 123.67-50.83 50.83-50.82 50.83-123.67t-50.83-123.67q-50.83-50.83-123.67-50.83-72.85 0-123.68 50.83-50.82 50.82-50.82 123.67t50.82 123.67q50.83 50.83 123.68 50.83Zm-100-134.5v-80h200v80h-200Z"
        />
      </svg>
    </button>
    <button id="lightbox-action-gallery" class="lightbox-action-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#e8eaed"
      >
        <path
          d="M236.44-152.59q-34.46 0-59.16-24.69-24.69-24.7-24.69-59.16 0-34.47 24.69-59.02Q201.98-320 236.44-320q34.47 0 59.02 24.54Q320-270.91 320-236.44q0 34.46-24.54 59.16-24.55 24.69-59.02 24.69Zm243.59 0q-34.46 0-59.04-24.69-24.58-24.7-24.58-59.16 0-34.47 24.55-59.02Q445.5-320 479.97-320q34.46 0 59.04 24.54 24.58 24.55 24.58 59.02 0 34.46-24.55 59.16-24.54 24.69-59.01 24.69Zm243.53 0q-34.47 0-59.02-24.69Q640-201.98 640-236.44q0-34.47 24.54-59.02Q689.09-320 723.56-320q34.46 0 59.16 24.54 24.69 24.55 24.69 59.02 0 34.46-24.69 59.16-24.7 24.69-59.16 24.69ZM236.44-396.41q-34.46 0-59.16-24.55-24.69-24.54-24.69-59.01 0-34.46 24.69-59.04 24.7-24.58 59.16-24.58 34.47 0 59.02 24.55Q320-514.5 320-480.03q0 34.46-24.54 59.04-24.55 24.58-59.02 24.58Zm243.59 0q-34.46 0-59.04-24.55-24.58-24.54-24.58-59.01 0-34.46 24.55-59.04 24.54-24.58 59.01-24.58 34.46 0 59.04 24.55 24.58 24.54 24.58 59.01 0 34.46-24.55 59.04-24.54 24.58-59.01 24.58Zm243.53 0q-34.47 0-59.02-24.55Q640-445.5 640-479.97q0-34.46 24.54-59.04 24.55-24.58 59.02-24.58 34.46 0 59.16 24.55 24.69 24.54 24.69 59.01 0 34.46-24.69 59.04-24.7 24.58-59.16 24.58ZM236.44-640q-34.46 0-59.16-24.54-24.69-24.55-24.69-59.02 0-34.46 24.69-59.16 24.7-24.69 59.16-24.69 34.47 0 59.02 24.69Q320-758.02 320-723.56q0 34.47-24.54 59.02Q270.91-640 236.44-640Zm243.59 0q-34.46 0-59.04-24.54-24.58-24.55-24.58-59.02 0-34.46 24.55-59.16 24.54-24.69 59.01-24.69 34.46 0 59.04 24.69 24.58 24.7 24.58 59.16 0 34.47-24.55 59.02Q514.5-640 480.03-640Zm243.53 0q-34.47 0-59.02-24.54Q640-689.09 640-723.56q0-34.46 24.54-59.16 24.55-24.69 59.02-24.69 34.46 0 59.16 24.69 24.69 24.7 24.69 59.16 0 34.47-24.69 59.02Q758.02-640 723.56-640Z"
        />
      </svg>
    </button>
    <button id="lightbox-action-close" class="lightbox-action-btn">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="100%"
        viewBox="0 -960 960 960"
        width="24px"
        fill="#e8eaed"
      >
        <path
          d="M256-192.35 192.35-256l224-224-224-224L256-767.65l224 224 224-224L767.65-704l-224 224 224 224L704-192.35l-224-224-224 224Z"
        />
      </svg>
    </button>
  </div>
  <div id="lightbox-content" class="lightbox-content">
  </div>
  <div id="lighbox-bottom" class="lightbox-bottom" style="display: none">
    <div id="lightbox-gallery-container" class="lightbox-gallery-container">
    </div>
  </div>
<!--</div>-->
`
const playIcon =
  `
<svg
  xmlns="http://www.w3.org/2000/svg"
  height="50px"
  viewBox="0 -960 960 960"
  width="50px"
  fill="#e8eaed"
  >
  <path
    d="M320-258v-450q0-14 9.07-22 9.06-8 21.15-8 3.78 0 7.91 1 4.12 1 7.87 3l354 226q7 5 10.5 11t3.5 14q0 8-3.5 14T720-458L366-232q-3.78 2-7.95 3-4.16 1-7.94 1-12.11 0-21.11-8t-9-22Zm60-225Zm0 171 269-171-269-171v342Z"
  />
</svg>
`
const soundIcon =
  `
<svg 
  xmlns="http://www.w3.org/2000/svg" 
  height="50px" 
  viewBox="0 -960 960 960" 
  width="50px" 
  fill="#e8eaed">
  <path 
    d="M285-270v-420q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v420q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37Zm165 160v-740q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v740q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63Q450-97.25 450-110ZM120-430v-100q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v100q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37Zm495 160v-420q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v420q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37Zm165-160v-100q0-12.75 8.68-21.38 8.67-8.62 21.5-8.62 12.82 0 21.32 8.62 8.5 8.63 8.5 21.38v100q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37Z"
  />
</svg>
`

class Lightbox {
  // Element
  #modalContainer
  #imageContainer

  // Action
  #downloadBtn
  #closeBtn
  #rotateBtn
  #zoomBtn
  #resetBtn

  // Zoom, rotate
  #degRotate = 0
  #zoomSize = 1

  // Mouse detect
  #startX = 0
  #startY = 0
  #endX = 0
  #endY = 0
  #isPanning = false

  #downloadUrl = null

  #galleryList = []
  #itemSelected = -1
  constructor() {
    this.#initContainer()
    this.#initAction()
    this.#initGalleryAction()
  }
  #initContainer() {
    let el = document.getElementById('lightbox')
    if (!el) {
      el = document.createElement('div')
      el.className = 'lightbox-container'
      el.innerHTML = containerTemplate
      document.body.appendChild(el)
    }
    el.style.display = 'none'
    // this.imageContainer = document.getElementById('lightbox-image-container')
    // const contentEl = document.getElementById("lightbox-content")
    // this.#contentContainer = contentEl.querySelector('div')
    this.#modalContainer = el
  }
  #initAction() {
    this.#closeBtn = document.getElementById('lightbox-action-close')
    this.#closeBtn.onclick = () => this.#onClose()

    this.#downloadBtn = document.getElementById('lightbox-action-download')
    this.#downloadBtn.onclick = () => {
      window.open(this.#downloadUrl)
    }
  }

  #initImageAction() {
    const galleryContainer = document.getElementById('lighbox-bottom')

    this.#imageContainer = document.getElementById('lightbox-image-container')
    this.#rotateBtn = document.getElementById('lightbox-action-rotate')
    this.#rotateBtn.style.display = "block"
    this.#rotateBtn.onclick = () => {
      galleryContainer.style.display = 'none'
      this.#degRotate += 90
      if (this.#degRotate > 360) this.#degRotate = 90
      this.#onRotate(this.#degRotate)
    }
    this.#zoomBtn = document.getElementById('lightbox-action-zoom')
    this.#zoomBtn.style.display = "block"
    this.#zoomBtn.onclick = () => {
      galleryContainer.style.display = 'none'
      this.#zoomSize ++;
      if (this.#zoomSize > 5) return
      this.#onZoom(this.#zoomSize)
    }
    this.#resetBtn = document.getElementById('lightbox-action-reset')
    this.#resetBtn.style.display = "block"
    this.#resetBtn.onclick = () => {
      galleryContainer.style.display = 'none'
      this.#endX = 0
      this.#endY = 0
      this.#onZoom()
    }

    this.#imageContainer.onwheel = (e) => {
      galleryContainer.style.display = 'none'
      if (e.deltaY < 0) {
        this.#zoomSize ++;
        this.#onZoom(this.#zoomSize)
      }
      else {
        this.#onZoom(1)
      }
    }

    this.#imageContainer.onmousedown = (e) => {
      galleryContainer.style.display = 'none'
      e.preventDefault();
      if (this.#zoomSize > 1 || this.#endX + this.#endY !== 0) {
        this.#startX = e.clientX - this.#endX;
        this.#startY = e.clientY - this.#endY;
        this.#isPanning = true;
        this.#imageContainer.style.cursor = 'grabbing';
      }
    };

    const elBox = document.getElementById('lightbox-content')

    elBox.onmousemove = (e) => {
      if (!this.#isPanning) return;
      this.#endX = e.clientX - this.#startX
      this.#endY = e.clientY - this.#startY
      this.#updateTransform()
    };

    elBox.onmouseup = () => {
      this.#isPanning = false;
      this.#imageContainer.style.cursor = this.#zoomSize > 1 ? 'grab' : 'default';
    };

    elBox.onmouseleave = () => {
      this.#isPanning = false
      this.#imageContainer.style.cursor = this.#zoomSize > 1 ? 'grab' : 'default';
    }

    this.#imageContainer.ontouchstart = (e) => {
      galleryContainer.style.display = 'none'
      if (e.touches.length === 1 && this.#zoomSize > 1) {
        const touch = e.touches[0]
        this.#startX = touch.clientX - this.#endX;
        this.#startY = touch.clientY - this.#endY;
        this.#isPanning = true;
      }
    }

    elBox.ontouchmove = (e) => {
      if (!this.#isPanning) return
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        this.#endX = touch.clientX - this.#startX
        this.#endY = touch.clientY - this.#startY
        this.#updateTransform(0)
      }
    }

    elBox.ontouchend = (e) => {
      this.#isPanning = false
    }

    elBox.ontouchcancel = (e) => {
      this.#isPanning = false
    }
  }

  #initGalleryAction() {
    const topAction = document.getElementById('lightbox-action-gallery')
    topAction.style.display = 'block'
    const galleryContainer = document.getElementById('lighbox-bottom')

    topAction.onclick = () => {
      const currDisplay = galleryContainer.style.display
      galleryContainer.style.display = currDisplay === 'none' ? "block" : 'none'
    }

    const container = document.getElementById('lightbox-gallery-container')
    const listEl = container.querySelectorAll('.lightbox-gallery-item')
    for (let i = 0; i < listEl.length; i++) {
      listEl[i].onclick = () => {
        if (i !== this.#itemSelected) {
          this.#itemSelected = i
          listEl[i].classList.add('lightbox-gallery-item-selected')
          if(this.#galleryList[i].type === 'iframe') galleryContainer.style.display = 'none'
          this.open(this.#galleryList[i])
          listEl.forEach((item, index) => {
            if (index !== i) {
              item.classList.remove('lightbox-gallery-item-selected')
            }
          })
        }
      }
    }
  }

  #onClose() {
    const contentContainer = document.getElementById('lightbox-content')
    contentContainer.replaceChildren()
    this.#modalContainer.style.display = 'none'
  }

  #onRotate(deg = 0) {
    this.#degRotate = deg
    this.#updateTransform()
  }
  #onZoom(size = 1) {
    if (size >= 5) return
    this.#zoomSize = size
    this.#updateTransform()
  }
  #onReset() {
    this.#zoomSize = 1
    this.#degRotate = 0
    this.#endX = 0
    this.#endY = 0
    this.#isPanning = false
    this.#startX = 0
    this.#startY = 0
    this.#updateTransform()
  }

  #updateTransform() {
    const el = document.getElementById('lightbox-image-container')
    el.style.transform = `scale(${this.#zoomSize}) translate(${this.#endX}px, ${this.#endY}px) rotate(${this.#degRotate}deg)`;
  }

  open(data) {
    const { type, downloadUrl } = data
    let shouldOpen = true
    const contentContainer = document.getElementById('lightbox-content')
    contentContainer.replaceChildren()
    switch (type) {
      case "image":
        const imageContainer = document.createElement('div')
        imageContainer.id = "lightbox-image-container"
        imageContainer.setAttribute('data-src', data.src)
        imageContainer.className = 'lightbox-image-container'
        imageContainer.style['background-image'] = `url(${data.src})`
        contentContainer.appendChild(imageContainer)

        this.#initImageAction()
        this.#onReset()
        break;
      case "video":
        if (this.#rotateBtn) this.#rotateBtn.style.display = "none"
        if (this.#zoomBtn) this.#zoomBtn.style.display = "none"
        if (this.#resetBtn) this.#resetBtn.style.display = "none"

        const videoContainer = document.createElement('div')
        videoContainer.id = "lightbox-video-container"
        videoContainer.className = 'lightbox-video-container'

        const video = document.createElement('video')
        video.className = 'lightbox-video'
        video.controls = true
        video.style.width = '100%'

        if (data.src) video.src = data.src

        if (Array.isArray(data.sources)) {
          for (const s of data.sources) {
            const source = document.createElement('source')
            source.src = s.src
            source.type = s.type
            video.appendChild(source)
          }
        }
        videoContainer.appendChild(video)
        contentContainer.appendChild(videoContainer)
        break;
      case "audio":
        if (this.#rotateBtn) this.#rotateBtn.style.display = "none"
        if (this.#zoomBtn) this.#zoomBtn.style.display = "none"
        if (this.#resetBtn) this.#resetBtn.style.display = "none"

        const audioContainer = document.createElement('div')

        const audio = document.createElement('audio')
        audio.controls = true
        if (data.src) audio.src = data.src

        if (Array.isArray(data.sources)) {
          for (const s of data.sources) {
            const source = document.createElement('source')
            source.src = s.src
            source.type = s.type
            audio.appendChild(source)
          }
        }
        audioContainer.appendChild(audio)
        contentContainer.appendChild(audioContainer)
        break
      case "iframe":
        if (this.#rotateBtn) this.#rotateBtn.style.display = "none"
        if (this.#zoomBtn) this.#zoomBtn.style.display = "none"
        if (this.#resetBtn) this.#resetBtn.style.display = "none"

        const iframeContainer = document.createElement('div')
        iframeContainer.style.width = '100%'
        iframeContainer.style.height = '100%'

        const iframe = document.createElement('iframe')
        iframe.style.border = 'none'
        iframe.style.width = '100%'
        iframe.style.height = '100%'
        iframe.src = data.src

        iframeContainer.appendChild(iframe)
        contentContainer.appendChild(iframeContainer)
        break;
      case "custom":
        if (this.#rotateBtn) this.#rotateBtn.style.display = "none"
        if (this.#zoomBtn) this.#zoomBtn.style.display = "none"
        if (this.#resetBtn) this.#resetBtn.style.display = "none"

        contentContainer.innerHTML = data.template
        break
      default:
        shouldOpen = false
        break;
    }
    if (downloadUrl) {
      this.#downloadUrl = downloadUrl
      this.#downloadBtn.style.display = 'block'
    }
    if (shouldOpen) {
      this.#modalContainer.style.display = "block"
    }
    else {
      console.error("Type is not valid");
    }
  }

  setGallery(list) {
    this.#galleryList = list
    const container = document.getElementById('lightbox-gallery-container')
    container.replaceChildren()
    for (let i = 0; i < list.length; i++) {
      const item = list[i]
      const elItem = document.createElement('div')
      elItem.setAttribute('data-src', item.thumbnail)
      elItem.className = "lightbox-gallery-item"
      if (list[i].type === 'video') {
        const videoIcon = document.createElement('span')
        videoIcon.innerHTML = playIcon
        elItem.appendChild(videoIcon)
      }
      else if (
        list[i].type === 'audio'
      ) {
        const audioIcon = document.createElement('span')
        audioIcon.innerHTML = soundIcon
        elItem.appendChild(audioIcon)
      }
      elItem.style.backgroundImage = `url(${item.thumbnail})`
      container.appendChild(elItem)
    }
    this.#initGalleryAction()
  }

  openGalleryItem(i) {
    if (i >= 0 && i < this.#galleryList.length) {
      const galleryContainer = document.getElementById('lighbox-bottom')
      const container = document.getElementById('lightbox-gallery-container')
      const listEl = container.querySelectorAll('.lightbox-gallery-item')
      listEl[i].classList.add('lightbox-gallery-item-selected')
      if(this.#galleryList[i].type === 'iframe') galleryContainer.style.display = 'none'
      this.open(this.#galleryList[i])
    }
  }
}

export default Lightbox