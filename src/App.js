import React from 'react';
import ListaDeNotas from './components/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro';
import { Component } from 'react';
import "./assets/App.css"
import "./assets/index.css"

class App extends Component {
  render()  {
    return(
      <section className="conteudo">
        <FormularioCadastro/>
        <ListaDeNotas/>
      </section>
    )
  }
}

// react -> Lib
// React -> ecossistema
export default App;
