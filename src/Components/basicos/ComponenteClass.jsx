
import React ,{ Component } from "react";
import { findByLabelText } from "@testing-library/react";


 class ComponenteClass  extends Component{
    
    constructor(props){
        super(props)
      
       this.setNomeV2 = this.setNomeV2.bind(this);
    }

    state = {
        nome:this.props.nome,
        nome2:this.props.nome2
   }

    

     setNome(valor){

       this.setState({
            nome:valor
       })
       console.log(this.state.nome)
     }

     setNomeV2(event){

        this.setState({
             nome2:event.target.value
        })
      }

    render(){
        return <div style={{display:'flex',flexDirection: 'column'}}>

            <strong>Ola eu sou uma Class Bind{this.state.nome2}</strong>
            <strong>Ola eu sou uma Class {this.state.nome}</strong>
            <input onChange={e => this.setNome(e.target.value)}></input>
            <input onChange={this.setNomeV2}></input>
        </div>
    }

 }

 export default ComponenteClass;
