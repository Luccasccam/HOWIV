import React, { useState, useEffect } from 'react'
import UserTables from './components/UserTables'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'


export default function App (props) {
  
  const usersData = [ // USERDATA NECESSÁRIO VERIFICAR COMO COMPOR DADOS DE UM BANCO
    { id: 1, nome: 'Fifa21', categoria: 'Entretenimento', quantidade: '1', valor: '279.90'},
    { id: 2, nome: 'God of War', categoria: 'Mitologia', quantidade: '1', valor: '249.90'},
    { id: 3, nome: 'GTA', categoria: 'Entretenimento', quantidade: '1', valor: '299.90'}
  ]
  

  const [users, setUsers] = useState(usersData) //USESTATE USA O ESTADO DA CONSTANTE USERDATA (OU ATRIBUI INFORMAÇÕES FO BANCO)
  //A CONSTANTE ADDUSER NA FUNÇÃO A BAIXO É RESPONSÁVEL POR CRIAR UM ID SEMPRE COM UM NÚMERO A MAIS
  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users , user ]) /* PORQUE AS ... ?*/
  }

  /* SETANDO O ESTADO INICIAL DO FORMULÁRIO */
  const initalFormState = {
     id: null,
     nome: '',
     categoria: '',
     quantidade: 0,
     valor: 0
  }
    const [ user, setUser ] = useState(initalFormState)
  
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !==id )) /* TENTAR ENTENDER A FUNÇÃO QUE ENCONTRA O ID */
  }
  
  const editRow = (user) =>{
    setEditing(true)
    setCurrentUser({
      id: user.id, 
      nome: user.nome, 
      categoria: user.categoria,
      quantidade: user.quantidade,
      valor: user.valor
    })
  }
  const [ editing, setEditing ] = useState(false)
    const [ currentUser, setCurrentUser ] = useState(initalFormState) /* ENTENDER O MOTIVO DOS NOMES currentUser, setCurrentUser */

  const updateUser = (id, updateUser) => {
    setEditing(false)
    setUsers(users.map((user) =>(user.id === id ? updateUser : user))) /* TENTAR ENTENDER A FUNÇÃO */
  }
  const handleInputChange = (event) => { /* Evento que será usado no input */
    const { nome, value } = event.target
    setUser ({...user, [nome]: value })
  }
  
  useEffect(() =>{
    setUser(props.currentUser)
  }, [props])
    

  return (
    <div className="container">
      <h1>Cadastro de jogos</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Editar Jogos</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser} 
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Adicionar Jogo</h2>
              <AddUserForm addUser={addUser}/>
            </div>
            )}
          </div>
            
        <div className="flex-large">
          <h2>Lista de Jogos</h2>
          <UserTables users={users} editRow={editRow} deleteUser={deleteUser}/> {/* ATRIBUIÇÃO DE USERS COMO FILHO DE USERTABLES  ESTADO EDIÇÃO E DELETE*/}
        </div>
      </div>
    </div>
  )
}
