import React, {cloneElement} from 'react';
import FamiliaMenbro from './FamiliaMenbro'

// export default props => {
//     return (<div>
//     { React.cloneElement(props.children,{...props})}
//     </div>)
// }

export default props => {
    return (<div>
    { React.Children.map(props.children,(el)=>{

            return cloneElement(el,props)
        
    })}
    </div>)
}