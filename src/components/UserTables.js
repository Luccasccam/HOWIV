import React, { useState } from 'react'
import { MDBBtn } from "mdbreact";

function UserTables( {repo} ) {
   
    let [listaJogos, setLista] = useState(repo.list())
    repo.inscrever(setLista);
 
    return(
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
                    listaJogos.map((jogo) =>(  /* cria map para varrer o array o user */
                        <tr key={jogo.Id}> {/* key é a definição de onde vai se atribuir as informações nesse caso id de user */}
                            <td>{jogo.Id}</td> {/* nome é atributo do array */}
                            <td>{jogo.Nome}</td> {/* nome é atributo do array */}
                            <td>{jogo.Categoria}</td>{/* atributo do array */}
                            <td>{jogo.Quantidade}</td>{/* atributo do array */}
                            <td>{jogo.Valor}</td>{/* atributo do array */}
                            <td>
                                <MDBBtn color="warning" size ="sm"
                                        onClick = {() => repo.handlerUpdate(jogo)}
                                        className="button muted-button">
                                    Editar
                                </MDBBtn>

                                <MDBBtn color="danger" size ="sm"
                                        // onClick={() => props.deleteUser(user.id)}
                                        className="button muted-button">
                                    Delete
                                </MDBBtn>
                            </td>
                        </tr>
                    ))
                }
                
            </tbody>
    </table>
)}

export default UserTables;