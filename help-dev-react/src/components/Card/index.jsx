import Teste from '../../assets/mysql-1.png'
import Teste3 from '../../assets/mysql-2.png'
import Teste5 from '../../assets/mysql-3.png'
import Teste6 from '../../assets/mysql-4.png'

export const Card = () => {
    return (
        <main className='bg-blue-project h-screen flex
        items-center justify-center'>
            <section className='flex flex-col items-center justify-center p-8 space-y-5 xl:w-1/3'>

                <article className='bg-white rounded-xl p-5 flex flex-col items-center text-center justify-center w-3/4'>
                    <h3 className='w-2/3 xl:w-2/4 text-2xl text-black font-semibold'>Sobre Flex-Box - CSS</h3>
                    <p>
                        Ao clicar no link, será aberta uma nova guia, onde você poderá conferir as representações sobre flex-box em CSS
                        Espero que lhe seja útil :)
                    </p>
                    <p>Créditos à <a href='devmedia.com.br'>devmedia.com.br</a></p>
                </article>

                <figure className='space-x-3 px-5 py-2 overflow-x-scroll flex w-2/3 justify-center items-center'>
                    <img className='h-20 w-40 ml-40' src={Teste} alt='teste' />
                    <img className='h-20 w-40' src={Teste3} alt='teste' />
                    <img className='h-20 w-40' src={Teste5} alt='teste' />
                    <img className='h-20 w-40' src={Teste6} alt='teste' />
                </figure>
            </section>
        </main>
    )
}