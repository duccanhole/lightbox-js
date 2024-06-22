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
  #startX
  #startY
  #endX
  #endY

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
      this.#zoomSize = 1
      this.#onZoom(this.#zoomSize)
    }

    this.#contentContainer.onwheel = (e) => {
      if(e.deltaY < 0) {
        this.#zoomSize ++;
        this.#onZoom(this.#zoomSize)
      }
      else {
        this.#onZoom(1)
      }
    }

    // this.#contentContainer.onmousedown = (e) => this.#onSwipe(e)
  }

  #onClose() {
    this.#modalContainer.style.display = 'none'
  }

  #onRotate(deg = 0) {
    this.#degRotate = deg
    this.#contentContainer.style.transform = `scale(${this.#zoomSize}) rotate(${this.#degRotate}deg) translate(${this.#positionX}%, ${this.#positionY}%)`
  }
  #onZoom(size = 1) {
    if(size >= 5 || size === this.#zoomSize) return
    this.#zoomSize = size
    this.#contentContainer.style.transform = `scale(${this.#zoomSize}) rotate(${this.#degRotate}deg) translate(${this.#positionX}%, ${this.#positionY}%)`
  }

  #onMoveImage(x = 50, y = 50) {
    if (x >= 0 && x <= 100) this.#positionX = x
    if (y >= 0 && y <= 100) this.#positionY = y
    this.#contentContainer.style.transform = `scale(${this.#zoomSize}) rotate(${this.#degRotate}deg) translate(${this.#positionX}%, ${this.#positionY}%)`
  }
  #onSwipe(e) {
    this.#startX = e.clientX;
    this.#startY = e.clientY;

    const mouseMoveHandler = (e) => {
      this.#endX = e.clientX;
      this.#endY = e.clientY;
    };

    const mouseUpHandler = (e) => {
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);

      const dx = this.#endX - this.#startX;
      const dy = this.#endY - this.#startY;
      console.log(dx, dy);
      if (Math.abs(dx) > Math.abs(dy)) {
        if (dx > 0) {
          console.log('Swipe Right');
          this.#positionX -= 20
        } else {
          console.log('Swipe Left');
          this.#positionX += 20
        }
      } else {
        if (dy > 0) {
          this.#positionY -= 20
          console.log('Swipe Down');
        } else {
          this.#positionY += 20
          console.log('Swipe Up');
        }
      }
      if (this.#zoomSize > 1) this.#onMoveImage(this.#positionX, this.#positionY)
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  }

  open(url) {
    const content = document.getElementById("lightbox-content")
    const contentContainer = content.querySelector('div')
    contentContainer.setAttribute('data-src', url)
    contentContainer.style['background-image'] = `url(${url})`
    this.#modalContainer.style.display = "block"
    // this.#modalContainer.onclick = this.close
    // document.body.appendChild(this.#modalContainer)
  }
}

export default Lightbox