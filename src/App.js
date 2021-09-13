import React from 'react';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Component } from 'react';
import "./App.css"

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
