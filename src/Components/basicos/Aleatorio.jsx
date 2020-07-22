
import React from 'react'

export default props => {


    let min = Math.ceil(props.min);
    let max = Math.floor(props.max);

    return (
        <div>
            <h1>Aleatorio</h1>
            <div>
                Max: {Math.floor(Math.random() * (max - min + 1)) + min}
               Min:{Math.floor(Math.random() * (min -max + 1)) + max}
            </div>

        </div>
    )
}