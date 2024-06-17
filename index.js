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
class Lightbox {
  #modalContainer
  #closeBtn
  #rotateBtn
  #zoomBtn

  #degRotate = 0
  #zoomSize = 1
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
    this.#closeBtn.onclick = () => {
      this.#modalContainer.style.display = 'none'
    }
    this.#rotateBtn = document.getElementById('lightbox-action-rotate')
    this.#rotateBtn.onclick = () => {
      this.#degRotate += 90
      if(this.#degRotate > 360) this.#degRotate = 90
      const content = document.getElementById("lightbox-content")
      const contentContainer = content.querySelector('div')
      contentContainer.style.transform = `rotate(${this.#degRotate}deg)`
    }
    this.#zoomBtn = document.getElementById('lightbox-action-zoom')
    this.#zoomBtn.onclick = () => {
      this.#zoomSize ++;
      if(this.#zoomSize > 5) return
        const content = document.getElementById("lightbox-content")
      console.log('zoom: '+this.#zoomSize);
      const contentContainer = content.querySelector('div')
      contentContainer.style.transform = `scale(${this.#zoomSize})`
    } 
  }

  open(url) {
    this.#degRotate = 0
    this.#zoomSize = 1
    const content = document.getElementById("lightbox-content")
    const contentContainer = content.querySelector('div')
    contentContainer.style['background-image'] = `url(${url})`
    this.#modalContainer.style.display = "block"
    // this.#modalContainer.onclick = this.close
    // document.body.appendChild(this.#modalContainer)
  }
  // close() {
  //   console.log("click ...");
  //   this.#modalContainer.style.display = "none"
  //   document.body.removeChild(this.#modalContainer)
  // }
}

// function lightboxOpen(){
//   if(!document.getElementById("modal-container")) {
//     const modalContainer = document.createElement('div')
//     modalContainer.className = "modal-container"
//     modalContainer.id = "modal-container"
//     modalContainer.style.display = "block"
//     modalContainer.onclick = () => {
//       modalContainer.style.display = "none"
//     }
//     document.body.appendChild(modalContainer)
//   }
// }

export default Lightbox