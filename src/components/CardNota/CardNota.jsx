import React from "react";
import { Component } from "react";
import "./estilo.css"

class CardNota extends Component {
  render() {
    return (
      <section>
        <header className="card-nota">
          <h3>Título</h3>
        </header>
        <p>Escreva sua Nota</p>
      </section>
    );
  }
}
export default CardNota;