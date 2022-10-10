import Teste from './assets/mysql-1.png'
import Teste3 from './assets/mysql-2.png'
import Teste5 from './assets/mysql-3.png'
import Teste6 from './assets/mysql-4.png'

export default function App() {
  return (
    <main>
      <section className='bg-blue-project flex flex-col items-center justify-center border-2 border-blue-900 p-8 space-y-5 xl:w-1/3 xl:m-5 my-5'>
        <h3 className='text-center w-2/3 xl:w-2/4 text-2xl text-white font-semibold'>TESTE</h3>

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