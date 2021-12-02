import React, { useState } from 'react'
import JogosRepository from './components/Repository/JogosRepository'
import FormJogos from './forms/FormJogos'
import UserTables from './components/UserTables'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'

function App () {
  return (
    <div className="container">
      <h1>Cadastro de jogos</h1>
      <div className="flex-row">
        <div className="flex-large">
            <div>
              <h2>Adicionar Jogo</h2>
              <FormJogos/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default App;