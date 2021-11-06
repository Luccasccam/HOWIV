import React, { useState } from 'react'
import JogosRepository from './components/Repository/JogosRepository'
import UserTables from './components/UserTables'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'

function App () {
  
  let [repo] = useState(new JogosRepository())

  // let [ editing, setEditing ] = useState(false)
  // setEditing(true);

  return (
    <div className="container">
      <h1>Cadastro de jogos</h1>
      <div className="flex-row">
        <div className="flex-large">
          {/* {editing ? (
            <div>
              <h2>Editar Jogos</h2>
              <EditUserForm update = {repo.update.bind(repo)}/>
            </div>
          ) : ( */}
            <div>
              <h2>Adicionar Jogo</h2>
              <AddUserForm repo = {repo} jogoInput = {repo.retornaJogoEdit.bind(repo)} create = {repo.create.bind(repo)}
              update = {repo.update.bind(repo)}
              />
            </div>
            {/* )} */}
          </div>
            
        <div className="flex-large">
          <h2>Lista de Jogos</h2>
          <UserTables repo = {repo} handlerInput = {repo.handlerUpdate.bind(repo)} /> {/* ATRIBUIÇÃO DE USERS COMO FILHO DE USERTABLES  ESTADO EDIÇÃO E DELETE*/}
        </div>
      </div>
    </div>
  )
}

export default App;