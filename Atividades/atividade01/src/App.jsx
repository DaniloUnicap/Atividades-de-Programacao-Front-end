import logo from './assets/logo.png'
import { Home } from './pages/Home'
import { Ods } from './pages/Ods'
import { Sobre } from './pages/Sobre'
import { Routes, Route, Link } from 'react-router-dom'


function App() {

  return (
    <div className='max-w-[1200px] mx-auto'>
      <nav className='border-b-2 py-2 border-sky-600 flex flex-col items-center md:flex-row md:justify-around md:items-center'>
        <img src={logo} alt="" className='w-12 my-4 md:my-0' />
        <ul className='flex flex-col font-bold text-sky-600 gap-4 md:flex-row'>
          <Link to="/"><li className='cursor-pointer hover:text-sky-500 '>Principal</li></Link>
          <Link to="/ods"><li className='cursor-pointer hover:text-sky-500 '>ODS 4</li></Link>
          <Link to="/sobre"><li className='cursor-pointer hover:text-sky-500 '>Sobre</li></Link>
        </ul>
      </nav>

      <main className='px-4'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/ods' element={<Ods/>}></Route>
          <Route path='/sobre' element={<Sobre/>}></Route>
        </Routes>

      </main>

      <footer className='text-white text-center font-bold py-12 bg-sky-600 mt-12'>
        Danilo Fernandes
      </footer>
    </div>
  )
}

export default App
