
import './App.css'
import { games } from './data/games'


function App() {

  return (
    <div className='font-mono'>

    
      <nav className='bg-[#020617] text-white font-bold flex justify-around items-center p-4'>
        <p className='text-3xl'>Vitezada</p>
        <ul className='hidden md:flex gap-4'>
          <a href="#" className='border-solid border-2 border-[#9333ea] rounded-md px-4 py-1 hover:bg-[#9333ea]'><li>Inicio</li></a>
          <a href="#" className='border-solid border-2 border-[#9333ea] rounded-md px-4 py-1 hover:bg-[#9333ea]'><li>Sobre</li></a>
          <a href="#" className='border-solid border-2 border-[#9333ea] rounded-md px-4 py-1 hover:bg-[#9333ea]'><li>Contato</li></a>
        </ul>
      </nav>

      <main className='text-white bg-[#111827]'>
        <h1 className='text-center text-4xl font-bold py-6 mb-6'>Alguns jogos aleatórios</h1>
        <section className='flex flex-col items-center '>
          <div className='lg:grid lg:grid-cols-2 gap-x-16'>
            {games.map(item => (
              <div className='border-2 border-[#9333ea] p-4 rounded-md mb-16 flex flex-col gap-4 '>
                <h1 className='text-2xl font-bold'>{item.titulo}</h1>
                <img src={item.tumbnail} alt={item.titulo} className='w-96 h-96 object-cover object-top rounded-md' />
                <p className='w-96'>{item.descricao}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className='bg-[#020617] text-white font-bold p-6 text-center'>
          <p>Danilo Fernandes</p>
        </footer>
      </main>
      </div>
  )
}

export default App
