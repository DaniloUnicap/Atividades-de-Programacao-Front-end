import { ods } from '../data/Ods'

export const Home = () => {
    return (
        <section className="mt-6">
            <h1 className=" text-3xl">O que são os ODS da ONU?</h1>
            <p className="my-6">
                Os Objetivos de Desenvolvimento Sustentável são um conjunto de 17 metas globais adotadas por todos os Estados Membros das Nações Unidas em 2015. Esses objetivos visam melhorar a qualidade de vida das pessoas, proteger o planeta e garantir a prosperidade para todos até 2030.
            </p>

            <h2 className=" text-2xl mb-6">Quais são os ODS e por que eles são importantes?</h2>
            <p>
                Como citado anteriormente, os ODS – Objetivos de Desenvolvimento Sustentável são um conjunto de 17 metas globais, sendo:
            </p>

            <div className='mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {ods.map(item => (
                    <article className='min-w-[260px] max-w-[320px] shadow-md p-4 mx-auto'>
                        <img src={item.img} alt={item.titulo} className='w-full' />
                        <p className='p-2'><span className='font-bold'>{item.titulo}:</span> {item.descricao}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}