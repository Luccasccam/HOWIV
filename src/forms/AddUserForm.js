
import React, { useState } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Jogos from '../components/Model/Jogos';

function AddUserForm( {create, update , jogoInput, repo} ) {
    
    let [jogoInp, setJogoInp] = useState(jogoInput);
    repo.inscreverJogo(setJogoInp);

    let Id;
    let Nome;
    let Categoria;
    let Quantidade;
    let Valor;

    return(
        <form /* EVENTO QUE CRIA USUÁRIAROS   */
            onSubmit={event => {    
                event.preventDefault();
                event.stopPropagation();

                let jogo = new Jogos();

                jogo.Nome = Nome
                jogo.Quantidade = Quantidade;
                jogo.Categoria = Categoria;
                jogo.Valor = Valor;
                // jogo.Id = 1;
                // console.log(jogo.Id);

                if(jogo.Id == null) {
                    console.log('Novo Jogo');

                    jogo.Id = 0;
                    create(jogo)
                } else {
                    console.log('Atualizando jogo');
                    jogo.Id = Id;
                    update(jogo)
                }

            }}
        >
            <MDBInput disabled label="Id" type="text" name="id" value= {jogoInp.Id} onChange= {(e) => Id = e.target.value} />
            <MDBInput label="Nome" type="text" name="nome" value= {jogoInp.Nome} onChange= {(e) => Nome = e.target.value} />
            <MDBInput label="Categoria do Jogo" type="text" name="categoria" value= {jogoInp.Categoria} onChange= {(e) => Categoria = e.target.value} />
            <MDBInput label="Quantidade Disponível" type="number" name="quantidade" value= {jogoInp.Quantidade} onChange={(e) => Quantidade = e.target.value} />
            <MDBInput label="Valor" type="number" name="valor" value= {jogoInp.Valor} onChange={(e) => Valor = e.target.value} />
            <MDBBtn type= "submit" color="success" className="button muted-button">
                ADICIONAR
            </MDBBtn>
        </form>
    )
}

export default AddUserForm;