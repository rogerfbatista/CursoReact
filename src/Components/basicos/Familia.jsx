import React from 'react';
import FamiliaMenbro from './FamiliaMenbro'

export default props => {
    return (<div>
        <FamiliaMenbro nome="Rogerio" sobrenome={props.sobrenome}></FamiliaMenbro>
        <FamiliaMenbro nome="Bianca" {...props}></FamiliaMenbro>
        <FamiliaMenbro nome="Enzo" sobrenome="Batista" ></FamiliaMenbro>
    </div>)
}