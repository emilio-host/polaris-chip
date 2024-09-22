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

.box {
  width: 250px;
  height: 500px;
  border: 3px solid black;
  border-radius: 20px;
  background-color: lightblue;
  padding: 10px;
  margin: 40px;
}

.change-color {
  background-color: lightgreen;
}

.button-container {
  display: flex;
}
<style>
button {
 border-radius: 8px;
  font-size: 12px;
  padding: 5px;
  margin: 5px 100px; 
}
</style>
    `;
  }

  render() {
    return html`<div class="Card">
    <div class="box">
      <b id="title">PSU Football</b>
      <img class="card-image" src="https://pbs.twimg.com/media/GWkEXj2XEAAOuzv?format=jpg&name=4096x4096" alt="Penn State Football">
      <b>Penn State Football is a historic Big 10 Program, known for its passionate fan base, national titles, and producing NFL talent.</b>
      <a href="https://hax.psu.edu/">
        <button>Details</button>
      </a>
      <button class="duplicate">Clone Card</button>
      <button id="changetitle">Change title</button>
      <button id="changeimage">Change image</button>
      <button id="changebg">Change background</button>
    </div>`;
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      image: { type: String }

    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
