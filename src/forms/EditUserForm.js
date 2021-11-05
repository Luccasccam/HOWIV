
import React, { useState } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Jogos from '../components/Model/Jogos';

function EditUserForm( {update} ) {
    
    let Id;
    let Nome;
    let Categoria;
    let Quantidade;
    let Valor;

    return(
        <form /* EVENTO QUE CRIA USUÁRIAROS   */
            onSubmit = {(event) => {
                event.preventDefault();
                event.stopPropagation();

                let jogo = new Jogos();

                jogo.Id = Id;
                jogo.Nome = Nome;
                jogo.Categoria = Categoria;
                jogo.Quantidade = Quantidade;
                jogo.Valor = Valor;

                update(jogo)
            }}
        >
            <MDBInput label="Nome" type="text" name="nome" onChange = {(e) => Nome = e.target.value} />
            <MDBInput label="Categoria do Jogo" type="text" name="categoria" onChange = {(e) => Categoria = e.target.value} />
            <MDBInput label="Quantidade Disponível" type="number" name="quantidade" onChange={(e) => Quantidade = e.target.value} />
            <MDBInput label="Valor" type="number" name="valor" value={user.valor} onChange={(e) => Valor = e.target.value} />
            <MDBBtn type="submit" color="success">
                ADICIONAR
            </MDBBtn>

            {/* <MDBBtn color="elegant"onClick={() => props.setEditing(false)}>
                CANCELAR
            </MDBBtn> */}
        </form>
    )
}

export default EditUserForm;