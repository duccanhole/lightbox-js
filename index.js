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
  #modalContainer

  #closeBtn
  #rotateBtn
  #zoomBtn
  #resetBtn

  #degRotate = 0
  #zoomSize = 1

  #startX
  #startY
  #endX
  #endY
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
    }
    el.style.display = 'none'
    this.#modalContainer = el
    document.body.appendChild(el)
  }
  #initAction(){
    this.#closeBtn = document.getElementById('lightbox-action-close')
    this.#closeBtn.onclick = () => this.#onClose()

    this.#rotateBtn = document.getElementById('lightbox-action-rotate')
    this.#rotateBtn.onclick = () => {
      this.#degRotate += 90
      if(this.#degRotate > 360) this.#degRotate = 90
      this.#onRotate(this.#degRotate)
    }
    this.#zoomBtn = document.getElementById('lightbox-action-zoom')
    this.#zoomBtn.onclick = () => {
      this.#zoomSize ++;
      if(this.#zoomSize > 5) return
      this.#onZoom(this.#zoomSize)
    } 
    this.#resetBtn = document.getElementById('lightbox-action-reset')
    this.#resetBtn.onclick = () => {
      this.#zoomSize = 1
      this.#onZoom(this.#zoomSize)
    }

    const content = document.getElementById("lightbox-content")
    const contentContainer = content.querySelector('div')
    contentContainer.onmousedown = (e) => this.#onSwipe(e)
  }

  #onClose() {
    this.#modalContainer.style.display = 'none'
  }

  #onRotate(deg = 0) {
    this.#degRotate = deg
    const content = document.getElementById("lightbox-content")
    const contentContainer = content.querySelector('div')
    contentContainer.style.transform = `rotate(${this.#degRotate}deg)`
  }
  #onZoom(size = 1) {
    this.#zoomSize = size
    const content = document.getElementById("lightbox-content")
    const contentContainer = content.querySelector('div')
    contentContainer.style.transform = `scale(${this.#zoomSize})`
  }

  #onSwipe(e){
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
          } else {
            console.log('Swipe Left');
          }
        } else {
          if (dy > 0) {
            console.log('Swipe Down');
          } else {
            console.log('Swipe Up');
          }
        }
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