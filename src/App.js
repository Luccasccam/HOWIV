import React from 'react'

import FormJogos from './forms/FormJogos'


function App () {
  return (
    <div className="container">
      <h1>Cadastro de jogos</h1>
      <div className="flex-row">
        <div className="flex-large">
              <h2>Adicionar Jogo</h2>
              <FormJogos/>
          </div>
      </div>
    </div>
  )
}

export default App;