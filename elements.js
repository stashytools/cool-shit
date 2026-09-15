class customHeader extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
      `
  }
}

class customFooter extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `   
      
      `
  }
}

customElements.define('c-header', customHeader)
customElements.define('c-footer', customFooter)