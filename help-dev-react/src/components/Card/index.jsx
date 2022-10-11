import './style.css'

export const Card = (props) => {
    return (
        <main className='bg-blue-project flex
        items-center justify-center flex-wrap'>
            <section className='m-10 shadow-card flex flex-col items-center justify-center p-8 space-y-5 xl:w-1/3'>

                <article className='bg-white rounded-2xl p-5 flex flex-col items-center text-center justify-center w-3/4'>
                    <h3 className='w-2/3 xl:w-2/4 text-2xl text-black font-semibold'>{props.titulo}</h3>

                    {props.children}
                </article>

                <figure className='space-x-3 px-5 py-2 galeria flex w-3/4 justify-center items-center'>
                    <img className='h-20 w-40' src={props.img1} alt='teste' />
                    <img className='h-20 w-40' src={props.img2} alt='teste' />
                    <img className='h-20 w-40' src={props.img3} alt='teste' />
                    <img className='h-20 w-40' src={props.img4} alt='teste' />
                </figure>
                <a className='text-blue-project bg-white text-center py-0.5 w-2/4 rounded-full hover:text-white hover:bg-blue-project shadow-hover cursor-pointer' target='_blank' href={props.href}>{props.link}</a>
            </section>
        </main>
    )
}