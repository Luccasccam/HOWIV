
import React, { useState } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";

export default function EditUserForm(props) {
    
const [ user, setUser ] =  useState(props.currentUser) 

const handleInputChange = (event) => { /* Evento que será usado no input */
    const { nome, value } = event.target
    setUser({...user, [nome]: value })
}

return(
    <form /* EVENTO QUE CRIA USUÁRIAROS   */
        onSubmit={(event) => {
            event.preventDefault()
            props.updateUser(user.id, user) /* ENTENDER OS PARAMETROS DA FUNÇÃO */
        }}
    >
    
        <MDBInput label="Nome" type="text" name="nome" value={user.nome} onChange={handleInputChange} />
        <MDBInput label="Categoria do Jogo" type="text" name="categoria" value={user.categoria} onChange={handleInputChange} />
        <MDBInput label="Quantidade Disponível" type="number" name="quantidade" value={user.quantidade} onChange={handleInputChange} />
        <MDBInput label="Valor" type="number" name="valor" value={user.valor} onChange={handleInputChange} />

{/*         <button>Update user</button>  */}
        <MDBBtn color="success">
            ADICIONAR
        </MDBBtn>
        <MDBBtn color="elegant"onClick={() => props.setEditing(false)}>
            CANCELAR
        </MDBBtn>

        
    </form>

    
)
}

