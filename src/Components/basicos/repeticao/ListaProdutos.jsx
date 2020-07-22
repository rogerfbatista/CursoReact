import React from 'react';
import Produtos from '../../../data/Produtos';

export default props => {

    const listaproduto = Produtos.map((p, i) =>
        <tr key={i}>
            <td>
                {p.id}
            </td>
            <td>
                {p.Produto}
            </td>
            <td>
                {p.Valor}
            </td>
        </tr>
    )

    return (<div>
        <table border="1">
            <thead>
                <tr>
                    <th>
                        Id
                </th>
                    <th>
                        Produto
                </th>
                    <th>
                        Valor
                </th>
                </tr>

            </thead>
            <tbody>
                {listaproduto}
            </tbody>
        </table>
    </div>)
}
