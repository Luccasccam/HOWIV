import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { MDBInput } from "mdbreact";
import { MDBBtn } from "mdbreact";

function FormJogos () {
    const [id, setId] = useState();
    const [nome, setNome] = useState();
    const [categoria, setCategoria] = useState();
    const [quantidade, setQuantidade] = useState();
    const [valor, setValor] = useState();
    const [listaJogos, setListaJogos] = useState([]);

    useEffect(() => {
        listarJogos();
    }, [])

    async function handleSubmit () {
        if(id == null) {
            console.log('Novo Jogo');

            let jogo = {"id": 0, "nome": nome, "categoria": categoria, "quantidade": quantidade, "valor": valor};

            const response = await axios.post('http://localhost:56391/api/Jogo/InserirJogo/', jogo);
            let data = response.data;
            console.log(data);

            listarJogos();
        } else {
            console.log('Atualizando jogo');

            let jogo = {"id": id, "nome": nome, "categoria": categoria, "quantidade": quantidade, "valor": valor};

            const response = await axios.put('http://localhost:56391/api/Jogo/EditarJogo', jogo);
            let data = response.data;
            console.log(data);

            setId('');
            listarJogos();
        }

        limparInputs();
    }
    
    async function listarJogos() {
        const response = await axios.get('http://localhost:56391/api/Jogo/ListarJogos');
        let data = response.data;
        console.log(data);
        
        setListaJogos(data)
    }

    function handleUpdate(jogo) {
        setId(jogo.id)
        setNome(jogo.nome)
        setCategoria(jogo.categoria)
        setQuantidade(jogo.quantidade)
        setValor(jogo.valor)
    }

    async function handleDelete(id) {
        console.log(id)
        const response = await axios.delete(`http://localhost:56391/api/Jogo/DeletarJogo/${8}`);
        let status = response.status;
        console.log(status);
    
        listarJogos();
    }

    function limparInputs() {
        console.log("limpandocampos")
        setId(null)
        setNome("")
        setQuantidade("")
        setCategoria("")
        setValor("")
    }

    return(
        <div>
            <div>
                <form
                    onSubmit={event => {    
                        event.preventDefault();
                        event.stopPropagation();

                        handleSubmit();
                    }}
                >
                    <MDBInput disabled label="Id" type="text" name="id" id="id" value= {id} />
                    <MDBInput label="Nome" type="text" name="nome" id="nome" value= {nome} onChange={(e) => setNome(e.target.value)} />
                    <MDBInput label="Categoria do Jogo" type="text" name="categoria" id="categoria" value= {categoria} onChange={(e) => setCategoria(e.target.value)} />
                    <MDBInput label="Quantidade Disponível" type="number" name="quantidade" id="quantidade" value= {quantidade} onChange={(e) =>  setQuantidade(e.target.value)} />
                    <MDBInput label="Valor" type="number" name="valor" value= {valor} id="valor" onChange={(e) =>  setValor(e.target.value)} />
                    <MDBBtn type= "submit" color="success" className="button muted-button">Continuar</MDBBtn>
                </form>
            </div>
            <div>
                <h2>Listagem de Jogos</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Categoria</th>
                            <th>Quantidade</th>
                            <th>Valor</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaJogos.map((jogo) => (
                                <tr key={jogo.id}>
                                    <td>{jogo.id}</td>
                                    <td>{jogo.nome}</td>
                                    <td>{jogo.categoria}</td>
                                    <td>{jogo.quantidade}</td>
                                    <td>{jogo.valor}</td>
                                    <td>
                                        <MDBBtn color="warning" size ="sm"
                                                className="button muted-button"
                                                onClick={() => handleUpdate(jogo)}
                                                >
                                            Editar
                                        </MDBBtn>

                                        <MDBBtn color="danger" size ="sm"
                                                className="button muted-button"
                                                onClick={() => handleDelete(jogo.id)}
                                                >
                                            Delete
                                        </MDBBtn>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default FormJogos;