import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.description = "My Description";
    this.image = "https://pbs.twimg.com/media/GWkEXj2XEAAOuzv?format=jpg&name=4096x4096";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      img {
  width: 250px;
  border-radius: 10px;
}

:host([fancy]) { 
display: block;
  background-color: pink;
  border: 2px solid fuchsia;
  box-shadow: 10px 5px 5px red;
}  

.box {
  width: 250px;
  min-height: 200px;
  border: 3px solid black;
  border-radius: 20px;
  background-color: lightblue;
  padding: 10px;
  margin: 40px;
}

.button-container {
  display: flex;
}

button {
 border-radius: 8px;
  font-size: 12px;
  padding: 5px;
  margin: 5px 100px; 
}

</style>`;
  }

  render() {
    return html`
      <div class="Card">
        <div class="box">
          <b>${this.title}</b>
      <img class="card-image" src="${this.image}" alt="${this.title}">

      <details ?open="${this.fancy}"  @toggle="${this.openChanged}">
        <summary>description</summary>
        <div>
          <slot>${this.description}</slot>

      <b>${this.description}</b>
      <a href="https://hax.psu.edu/">
        <button>Details</button>
      </a>
  </div>
</details>

    </div>
  </div>`;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      image: { type: String },
      fancy: { type: Boolean, reflect: true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
