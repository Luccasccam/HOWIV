import React from 'react'
import { MDBBtn } from "mdbreact";

export default  function UserTables(props) { /* PROPS É O PARAMETRO QUE SERÁ USADO PARA SETAR USERS */
   
    return(
        <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Categoria</th>
        <th>Quantidade</th>
        <th>Valor</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
        {props.users.length > 0 ? ( /* seta propriedades do users pergunta se o tamanho é maior que 0 */
            props.users.map((user) =>(  /* cria map para varrer o array o user */
                <tr key={user.id}> {/* key é a definição de onde vai se atribuir as informações nesse caso id de user */}
                    <td>{user.nome}</td> {/* nome é atributo do array */}
                    <td>{user.categoria}</td>{/* atributo do array */}
                    <td>{user.quantidade}</td>{/* atributo do array */}
                    <td>{user.valor}</td>{/* atributo do array */}
                    <td>
                        <MDBBtn color="warning" size ="sm"
                                onClick={() => props.editRow(user)}
                                className="button muted-button">
                            Editar
                        </MDBBtn>

                        <MDBBtn color="danger" size ="sm"
                                onClick={() => props.deleteUser(user.id)}
                                className="button muted-button">
                            Delete
                        </MDBBtn>
                    </td>
                </tr>
            ))
        ) : (
            <tr colSpan={3}>Sem /Jogos</tr>
        
        )}
        
    </tbody>
  </table>
)}