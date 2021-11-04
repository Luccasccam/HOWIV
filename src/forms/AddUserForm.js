
import React, { useState } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";

export default function AddUserForm(props) {

    const initialFormState = { id: null, nome: '', categoria: '', quantidade: '0', valor: '0'}/* SETANDO O ESTADO INICIAL DO FORMULÁRIO */

    const [ user, setUser ] = useState(initialFormState)
   
    const handleInputChange = (event) => { /* Evento que será usado no input */
        const { name, value } = event.target
        
        setUser({ ... user, [name]: value }) /* PORQUE AS ... ? */
        
    }

    return(
        <form /* EVENTO QUE CRIA USUÁRIAROS   */
            onSubmit={event => {    
                event.preventDefault()
                if (!user.nome || !user.categoria || !user.quantidade || !user.valor) return
                props.addUser(user)
                setUser(initialFormState)
        }}
        >
            <MDBInput label="Nome" type="text" name="nome" value={user.nome} onChange={handleInputChange} />
            <MDBInput label="Categoria do Jogo" type="text" name="categoria" value={user.categoria} onChange={handleInputChange} />
            <MDBInput label="Quantidade Disponível" type="number" name="quantidade" value={user.quantidade} onChange={handleInputChange} />
            <MDBInput label="Valor" type="number" name="valor" value={user.valor} onChange={handleInputChange} />
            <button>Add new user</button>
            <MDBBtn color="success" onClick={() => props.addUser(user)}className="button muted-button">
                ADICIONAR
            </MDBBtn>
        </form>
    )
}