import React from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import { Component } from "react";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component {
  criarNota(titulo, texto) {
    console.log("Uma nova nota foi criada:" + titulo + " " + texto);
  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota} />
        <ListaDeNotas />
      </section>
    );
  }
}

// react -> Lib
// React -> ecossistema
export default App;
