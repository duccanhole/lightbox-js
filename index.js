const containerTemplate =
  `
<!--<div class="lightbox-container" style="display: block">-->
  <div class="lightbox-action-container">
    <button
      id="lightbox-action-download"
      class="lightbox-action-btn"
    ></button>
    <button
      id="lightbox-action-rotate"
      class="lightbox-action-btn"
    ></button>
    <button id="lightbox-action-zoom" class="lightbox-action-btn"></button>
    <button id="lightbox-action-reset" class="lightbox-action-btn"></button>
    <button id="lightbox-action-gallery" class="lightbox-action-btn"></button>
    <button id="lightbox-action-close" class="lightbox-action-btn"></button>
  </div>
  <div id="lightbox-content" class="lightbox-content">
    <div></div>
  </div>
  <div class="lightbox-pagination">
    <button id="lightbox-pagination-prev" class="lightbox-pagination-btn"></button>
    <button id="lightbox-pagination-next" class="lightbox-pagination-btn"></button>
  </div>
  <div class="lightbox-gallery"></div>
<!--</div>-->
`
// todos: lazy loading image
class Lightbox {
  // Element
  #modalContainer
  #contentContainer

  // Action
  #closeBtn
  #rotateBtn
  #zoomBtn
  #resetBtn

  // Zoom, rotate
  #degRotate = 0
  #zoomSize = 1

  // Swipe detect
  #startX = 0
  #startY = 0
  #endX = 0
  #endY = 0
  #isPanning = false

  // Move position
  #positionX = 0
  #positionY = 0
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
    const contentEl = document.getElementById("lightbox-content")
    this.#contentContainer = contentEl.querySelector('div')
    this.#modalContainer = el
  }
  #initAction() {
    this.#closeBtn = document.getElementById('lightbox-action-close')
    this.#closeBtn.onclick = () => this.#onClose()

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

    this.#contentContainer.onwheel = (e) => {
      if (e.deltaY < 0) {
        this.#zoomSize ++;
        this.#onZoom(this.#zoomSize)
      }
      else {
        this.#onZoom(1)
      }
    }

    this.#contentContainer.onmousedown = (e) => {
      e.preventDefault();
      if (this.#zoomSize > 1 || this.#endX + this.#endY !== 0) {
        this.#startX = e.clientX - this.#endX;
        this.#startY = e.clientY - this.#endY;
        this.#isPanning = true;
        this.#contentContainer.style.cursor = 'grabbing';
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
      this.#contentContainer.style.cursor = this.#zoomSize > 1 ? 'grab' : 'default';
    };

    elBox.onmouseleave = () => {
      this.#isPanning = false
      this.#contentContainer.style.cursor = this.#zoomSize > 1 ? 'grab' : 'default';
    }
  }

  #onClose() {
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
    this.#contentContainer.style.transform = `scale(${this.#zoomSize}) rotate(${this.#degRotate}deg) translate(${this.#endX}px, ${this.#endY}px)`;
  }

  open(url) {
    const content = document.getElementById("lightbox-content")
    const contentContainer = content.querySelector('div')
    contentContainer.setAttribute('data-src', url)
    contentContainer.style['background-image'] = `url(${url})`
    this.#onReset()
    this.#modalContainer.style.display = "block"
    // this.#modalContainer.onclick = this.close
    // document.body.appendChild(this.#modalContainer)
  }
}

export default Lightbox