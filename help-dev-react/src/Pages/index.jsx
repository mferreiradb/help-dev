import { Card } from '../components/Card'

import Mysql from '../assets/mysql-1.png'
import Mysql2 from '../assets/mysql-2.png'
import Mysql3 from '../assets/mysql-3.png'
import Mysql4 from '../assets/mysql-4.png'
import CSS from '../assets/flex-box-1.png'
import CSS2 from '../assets/flex-box-2.png'
import CSS3 from '../assets/flex-box-3.png'
import CSS4 from '../assets/flex-box-4.png'
import Tabela from '../assets/tabelas-1.png'
import Tabela2 from '../assets/tabelas-2.png'
import Tabela3 from '../assets/tabelas-3.png'
import Tabela4 from '../assets/tabelas-4.png'

export const Home = () => {
    return (
        <main className='bg-blue-project flex
        items-center justify-center flex-wrap'>
            <Card img1={CSS} img2={CSS2} img3={CSS3} img4={CSS4} titulo='Sobre Flex-Box - CSS' link='Clique aqui para acessar' href='https://mferreiradb.github.io/flex-box/'>
                <p>
                    Ao clicar no link, será aberta uma nova guia, onde você poderá conferir as representações sobre flex-box em CSS
                    Espero que lhe seja útil :)
                </p>
                <p>Créditos à <a className='underline text-blue-700' href='devmedia.com.br'>devmedia.com.br</a></p>
            </Card>

            <Card img1={Mysql} img2={Mysql2} img3={Mysql3} img4={Mysql4} titulo='Sobre Mysql - Curso em vídeo' link='Clique aqui para baixar' href='src/utilities/comandos-basicos-mysql.rar'>
                <p>
                    Ao clicar no link abaixo, será feito o download dos documentos mostrados no print.


                </p>
                <p>Direitos reservados ao professor Gustavo Guanabara <a className='underline text-blue-700' href='https://www.cursoemvideo.com'>(https://www.cursoemvideo.com)</a></p>
            </Card>

            <Card img1={Tabela} img2={Tabela2} img3={Tabela3} img4={Tabela4} titulo='Sobre Tabelas - CSS' link='Clique aqui para acessar' href='https://mferreiradb.github.io/tabelas/'>
                <p>
                    Ao clicar no link, será aberta uma nova guia, onde você poderá conferir as representações sobre Tabelas em CSS.
                    Espero que lhe seja útil :)
                </p>
                <p>Créditos à <a className='underline text-blue-700' href='devmedia.com.br'>devmedia.com.br</a></p>
            </Card>
        </main>
    )
}