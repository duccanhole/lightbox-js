class Lightbox {
  #modalContainer
  #isOpen = false
  constructor() {
    this.#modalContainer = this.#getElement("div", "modal-container", "modal-container", {
      display: "none"
    })
  }
  #getElement(tag, id, className, style) {
    let el = document.getElementById(id)
    if (el) return el 
    else {
      el = document.createElement(tag)
      el.id = id
      el.className = className
      el.style = style
      return el
    }
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