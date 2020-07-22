import React from 'react';
import aluno from '../../../data/aluno';

export default props=>{


    return (<div>
        <ul>
            <li>Ana -9.1</li>
            <li>Rogerio - 3.1</li>
            <li>Bianca - 9.1</li>
            <li>Enzo - 9.1</li>
        </ul>
        <ul>
        { aluno.map((l, i)=>             

            <li key={i}>{l.id} { l.nome}{l.nota} </li>
            
        
        )}
        </ul>
    </div>)
}
