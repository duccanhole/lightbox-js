const containerTemplate =
`
<div class="lightbox-container" style="display: block">
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
  <div class="lightbox-content"></div>
  <div class="lightbox-pagination">
    <button id="lightbox-pagination-prev" class="lightbox-pagination-btn"></button>
    <button id="lightbox-pagination-next" class="lightbox-pagination-btn"></button>
  </div>
  <div class="lightbox-gallery"></div>
</div>
`
class Lightbox {
  #modalContainer
  #isOpen = false
  constructor() {
    this.#initContainer()
  }
  #initContainer() {
    const el = document.createElement('div')
    el.style.display = 'none'
    el.className = 'modal-container'
    el.innerHTML = 
    `

    `
  }

  open(){
    this.#modalContainer.style.display = "block"
    this.#modalContainer.onclick = this.close
    document.body.appendChild(this.#modalContainer)
  }
  close() {
    console.log("click ...");
    this.#modalContainer.style.display = "none"
    document.body.removeChild(this.#modalContainer)
  }
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