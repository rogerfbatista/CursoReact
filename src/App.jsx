
import React from 'react'
import './index.css'
import './App.css'

import Primeiro from './Components/basicos/Primeiro'
import Segundo from './Components/basicos/Segundo'
import ComParametro from './Components/basicos/ComParametro'
import Fragmento from './Components/basicos/Fragmento'
import Aleatorio from './Components/basicos/Aleatorio'
import Card from './Components/Layout/Card'
import Familia from './Components/basicos/Familia'
import FamiliaPai from './Components/basicos/FamiliaPai'
import FamiliaMenbro from './Components/basicos/FamiliaMenbro'
import ListaAlunos from './Components/basicos/repeticao/ListaAlunos'
import ListaProdutos from './Components/basicos/repeticao/ListaProdutos'
import ParOuImpar from './Components/basicos/condicional/ParOuImpar'
import UsuarioInfo from './Components/basicos/condicional/UsuarioInfo'
import DiretaPai from './Components/basicos/comunicacao/DiretaPai'
import IndiretaPai from './Components/basicos/comunicacao/IndiretaPai'
import ComponenteClass from './Components/basicos/ComponenteClass.jsx'

export default function App() {

  return (

    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="Exemplo de Card" color="blue">
          <Aleatorio max="10" min="8"></Aleatorio>
        </Card>
        <Card titulo="Fragmento">
          <Fragmento> </Fragmento>
        </Card>
        <Card titulo="Primeiro">
          <Primeiro></Primeiro>
        </Card>
        <Card titulo="Segundo">
          <Segundo></Segundo>
        </Card>
        <Card titulo="Com Parametro" color="#588C73">
          <ComParametro titulo="Rogerio" subtitulo="Bianca"></ComParametro>
        </Card>
        <Card titulo="Famiia">
          <Familia sobrenome="Ferreira"></Familia>
        </Card>
        <Card titulo="Famiia Pai">
          <FamiliaPai>
            <FamiliaMenbro nome="Rogerio"></FamiliaMenbro>
            <FamiliaMenbro nome="Enzo"></FamiliaMenbro>
          </FamiliaPai>
        </Card>
        <Card titulo="Lista de Alunos">
          <ListaAlunos></ListaAlunos>
        </Card>
        <Card titulo="Lista de Produtos">
          <ListaProdutos></ListaProdutos>
        </Card>
        <Card titulo="Condicional ">
          <ParOuImpar numero={5}></ParOuImpar>
          <UsuarioInfo usuario={{ nome: "Enzo" }}></UsuarioInfo>

        </Card>
        <Card titulo="Comunicação Direta ">
          <DiretaPai></DiretaPai>
        </Card>
        <Card titulo="Comunicação Indireta ">
        <IndiretaPai></IndiretaPai>
        </Card>
        <Card titulo="Componente Class Controladora ">
          <ComponenteClass></ComponenteClass>
        </Card>
      </div>
    </div>
  )
}
