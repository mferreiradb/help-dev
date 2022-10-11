import React from 'react'
import { Card } from './components/Card'

import Teste from './assets/mysql-1.png'
import Teste2 from './assets/mysql-2.png'
import Teste3 from './assets/mysql-3.png'
import Teste4 from './assets/mysql-4.png'

export default function App() {
  return (
    <>
      <Card img1={Teste} img2={Teste2} img3={Teste3} img4={Teste4} titulo='Sobre Flex-Box - CSS' link='Clique aqui para acessar' href='https://mferreiradb.github.io/flex-box/'>
        <p>
          Ao clicar no link, será aberta uma nova guia, onde você poderá conferir as representações sobre flex-box em CSS
          Espero que lhe seja útil :)
        </p>
        <p>Créditos à <a className='underline text-blue-700' href='devmedia.com.br'>devmedia.com.br</a></p>
      </Card>
    </>
  )
}