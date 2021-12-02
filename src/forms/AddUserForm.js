import React, { useState } from 'react'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";
import Jogos from '../components/Model/Jogos';

function AddUserForm( {create, update , jogoInput, repo} ) {

    const [id, setId] = useState();
    const [nome, setNome] = useState();
    const [categoria, setCategoria] = useState();
    const [quantidade, setQuantidade] = useState();
    const [valor, setValor] = useState();

    // const [controleForm, setControleForm] = useState(Boolean);
    let [jogoInp, setJogoInp] = useState(jogoInput);
    repo.inscreverJogo(setJogoInp);


    function handleInputs(event) {
        if(event.target.name === "nome") 
        setNome(event.target.value);

        if(event.target.name === "categoria")
        setCategoria(event.target.value);

        if(event.target.name === "quantidade")
        setQuantidade(event.target.value);

        if(event.target.name === "valor")
        setValor(event.target.value);
    }

    function handleSubmit () {
        let jogo = new Jogos();

        jogo.Id = id;
        jogo.Nome = nome;
        jogo.Quantidade = quantidade;
        jogo.Categoria = categoria;
        jogo.Valor = valor;
        // console.log(jogo.Id);

        if(jogo.Id == null) {
            console.log('Novo Jogo');

            jogo.Id = 0;
            create(jogo)
        } else {
            console.log('Atualizando jogo');
            jogo.Id = jogoInp.Id;

            update(jogo)
        }

        limparInputs();
    }

    function limparInputs() {
        console.log("limpandocampos")
        setId("")
        setNome("")
        setQuantidade("")
        setCategoria("")
        setValor("")

        console.log(jogoInput.Nome);
    }

    return(
        <div>
            <div>
                <form /* EVENTO QUE EDITA USUÁRIAROS   */
                    onSubmit={event => {    
                        event.preventDefault();
                        event.stopPropagation();

                        handleSubmit();
                    }}
                >
                    <MDBInput disabled label="Id" type="text" name="id" id="id" value= {jogoInp.Id} />
                    <MDBInput label="Nome" type="text" name="nome" id="nome" value= {nome} onChange= {handleInputs} />
                    <MDBInput label="Categoria do Jogo" type="text" name="categoria" id="categoria" value= {categoria} onChange= {handleInputs} />
                    <MDBInput label="Quantidade Disponível" type="number" name="quantidade" id="quantidade" value= {quantidade} onChange={handleInputs} />
                    <MDBInput label="Valor" type="number" name="valor" value= {valor} id="valor" onChange={handleInputs} />
                    <MDBBtn type= "submit" color="success" className="button muted-button">Continuar</MDBBtn>
                </form>
            </div>
        </div>
    )
}

export default AddUserForm;