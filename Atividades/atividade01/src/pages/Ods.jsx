import { ods } from '../data/Ods'

export const Ods = () => {
    return (
        <div className="mt-4 shadow-lg border-2 border-sky-600 rounded-md p-4">
            <h1 className="text-3xl text-center text-sky-600">ODS 4 - Educação de qualidade</h1>
            <img src={ods[3].img} alt={ods[3].titulo} className='min-w-[260px] max-w-[400px] mx-auto my-4' />
            <p className="mt-4">
                O ODS 4 é especificamente focado em "Educação de Qualidade". Ele busca garantir o acesso universal à educação de qualidade, promover oportunidades de aprendizagem ao longo da vida para todos e garantir a igualdade de acesso à educação, bem como promover resultados de aprendizagem relevantes e eficazes. Isso inclui desde o acesso à educação primária até a formação profissional e técnica de qualidade. A ONU considera a educação um pilar fundamental para o desenvolvimento sustentável, pois está intrinsecamente ligada a uma série de outros objetivos, como a erradicação da pobreza, a promoção da saúde, a igualdade de gênero e o desenvolvimento econômico.
            </p>
        </div>
    )
}