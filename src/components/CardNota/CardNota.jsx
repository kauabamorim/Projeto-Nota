import React from "react";
import { Component } from "react";
import "./estilo.css";

class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <header>
          <h3 className="card-nota_titulo">Título</h3>
        </header>
        <p className="card-nota_texto">Escreva sua Nota</p>
      </section>
    );
  }
}
export default CardNota;
