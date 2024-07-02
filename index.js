const containerTemplate =
  `
<!--<div id="lightbox-modal" class="lightbox-container" style="display: block">-->
  <div class="lightbox-action-container">
    <button
      id="lightbox-action-download"
      class="lightbox-action-btn"
    >
      <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
        <path d="M480-322.87 268.52-534.35l63.89-65.41L434.5-497.44v-310.69h91v310.69l102.09-102.32 63.89 65.41L480-322.87Zm-237.13 171q-37.78 0-64.39-26.61t-26.61-64.39v-120h91v120h474.26v-120h91v120q0 37.78-26.61 64.39t-64.39 26.61H242.87Z"/>
      </svg>
    </button>
    <button
      id="lightbox-action-rotate"
      class="lightbox-action-btn"
      style="display: none"
    ></button>
    <button id="lightbox-action-zoom" class="lightbox-action-btn" style="display: none"></button>
    <button id="lightbox-action-reset" class="lightbox-action-btn" style="display: none"></button>
    <button id="lightbox-action-gallery" class="lightbox-action-btn">
      <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
        <path d="M236.44-152.59q-34.46 0-59.16-24.69-24.69-24.7-24.69-59.16 0-34.47 24.69-59.02Q201.98-320 236.44-320q34.47 0 59.02 24.54Q320-270.91 320-236.44q0 34.46-24.54 59.16-24.55 24.69-59.02 24.69Zm243.59 0q-34.46 0-59.04-24.69-24.58-24.7-24.58-59.16 0-34.47 24.55-59.02Q445.5-320 479.97-320q34.46 0 59.04 24.54 24.58 24.55 24.58 59.02 0 34.46-24.55 59.16-24.54 24.69-59.01 24.69Zm243.53 0q-34.47 0-59.02-24.69Q640-201.98 640-236.44q0-34.47 24.54-59.02Q689.09-320 723.56-320q34.46 0 59.16 24.54 24.69 24.55 24.69 59.02 0 34.46-24.69 59.16-24.7 24.69-59.16 24.69ZM236.44-396.41q-34.46 0-59.16-24.55-24.69-24.54-24.69-59.01 0-34.46 24.69-59.04 24.7-24.58 59.16-24.58 34.47 0 59.02 24.55Q320-514.5 320-480.03q0 34.46-24.54 59.04-24.55 24.58-59.02 24.58Zm243.59 0q-34.46 0-59.04-24.55-24.58-24.54-24.58-59.01 0-34.46 24.55-59.04 24.54-24.58 59.01-24.58 34.46 0 59.04 24.55 24.58 24.54 24.58 59.01 0 34.46-24.55 59.04-24.54 24.58-59.01 24.58Zm243.53 0q-34.47 0-59.02-24.55Q640-445.5 640-479.97q0-34.46 24.54-59.04 24.55-24.58 59.02-24.58 34.46 0 59.16 24.55 24.69 24.54 24.69 59.01 0 34.46-24.69 59.04-24.7 24.58-59.16 24.58ZM236.44-640q-34.46 0-59.16-24.54-24.69-24.55-24.69-59.02 0-34.46 24.69-59.16 24.7-24.69 59.16-24.69 34.47 0 59.02 24.69Q320-758.02 320-723.56q0 34.47-24.54 59.02Q270.91-640 236.44-640Zm243.59 0q-34.46 0-59.04-24.54-24.58-24.55-24.58-59.02 0-34.46 24.55-59.16 24.54-24.69 59.01-24.69 34.46 0 59.04 24.69 24.58 24.7 24.58 59.16 0 34.47-24.55 59.02Q514.5-640 480.03-640Zm243.53 0q-34.47 0-59.02-24.54Q640-689.09 640-723.56q0-34.46 24.54-59.16 24.55-24.69 59.02-24.69 34.46 0 59.16 24.69 24.69 24.7 24.69 59.16 0 34.47-24.69 59.02Q758.02-640 723.56-640Z"/>
      </svg>
    </button>
    <button id="lightbox-action-close" class="lightbox-action-btn">
      <svg xmlns="http://www.w3.org/2000/svg" height="100%" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
        <path d="M256-192.35 192.35-256l224-224-224-224L256-767.65l224 224 224-224L767.65-704l-224 224 224 224L704-192.35l-224-224-224 224Z"/>
      </svg>
    </button>
  </div>
  <div id="lightbox-content" class="lightbox-content">
<!--</div>-->
`
// todos: lazy loading image
class Lightbox {
  // Element
  #modalContainer
  #imageContainer

  // Action
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
  constructor() {
    this.#initContainer()
    this.#initAction()
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
  }

  #initImageAction() {
    this.#imageContainer = document.getElementById('lightbox-image-container')
    this.#rotateBtn = document.getElementById('lightbox-action-rotate')
    this.#rotateBtn.onclick = () => {
      this.#degRotate += 90
      if (this.#degRotate > 360) this.#degRotate = 90
      this.#onRotate(this.#degRotate)
    }
    this.#zoomBtn = document.getElementById('lightbox-action-zoom')
    this.#zoomBtn.onclick = () => {
      this.#zoomSize ++;
      if (this.#zoomSize > 5) return
      this.#onZoom(this.#zoomSize)
    }
    this.#resetBtn = document.getElementById('lightbox-action-reset')
    this.#resetBtn.onclick = () => {
      this.#endX = 0
      this.#endY = 0
      this.#onZoom()
    }

    this.#imageContainer.onwheel = (e) => {
      if (e.deltaY < 0) {
        this.#zoomSize ++;
        this.#onZoom(this.#zoomSize)
      }
      else {
        this.#onZoom(1)
      }
    }

    this.#imageContainer.onmousedown = (e) => {
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
      if(e.touches.length === 1 && this.#zoomSize > 1 ) {
        const touch = e.touches[0]
        this.#startX = touch.clientX - this.#endX;
        this.#startY = touch.clientY - this.#endY;
        this.#isPanning = true;
      }
    }

    elBox.ontouchmove = (e) => {
      if(!this.#isPanning) return
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
    const { type } = data
    let shouldOpen = true
    const contentContainer = document.getElementById('lightbox-content')
    contentContainer.replaceChildren()
    switch (type) {
      case "image":
        const imageContainer = document.createElement('div')
        imageContainer.id = "lightbox-image-container"
        imageContainer.setAttribute('data-src', data.url)
        imageContainer.className = 'lightbox-image-container'
        imageContainer.style['background-image'] = `url(${data.url})`
        contentContainer.appendChild(imageContainer)

        this.#initImageAction()
        this.#onReset()
        break;
      case "video":
        const videoContainer = document.createElement('div')
        videoContainer.id = "lightbox-video-container"
        videoContainer.className = 'lightbox-video-container'

        const video = document.createElement('video')
        video.className = 'lightbox-video'
        video.controls = true
        video.style.width = '100%'

        for(const s of data.sources) {
          const source = document.createElement('source')
          source.src = s.src 
          source.type = s.type
          video.appendChild(source)
        }
        videoContainer.appendChild(video)
        contentContainer.appendChild(videoContainer)
        break;
      default:
        shouldOpen = false
        break;
    }
    if (shouldOpen) {
      this.#modalContainer.style.display = "block"
    }
    else {
      console.error("Type is not valid");
    }
    // const content = document.getElementById("lightbox-content")
    // const contentContainer = content.querySelector('div')
    // contentContainer.setAttribute('data-src', url)
    // contentContainer.style['background-image'] = `url(${url})`
    // this.#onReset()
    // this.#modalContainer.style.display = "block"
    // this.#modalContainer.onclick = this.close
    // document.body.appendChild(this.#modalContainer)
  }
}

export default Lightbox