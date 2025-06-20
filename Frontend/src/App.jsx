import React from 'react'
import Form from './Components/Form'
import formImg from './assets/form.png'

const App = () => {
  return (
    <main className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100'>
      <h1 className='sm:pb-20 pt-5 sm:pt-0 pb-5 font-playfair text-2xl sm:text-5xl font-bold text-slate-700 text-center  px-5'>Relax, it's just a few clicks to make a difference.</h1>

      <div className='flex items-center w-ffull justify-center sm:px-5 gap-x-1'>
        <Form />

        <div className='flex-1 sm:flex justify-center items-center hidden'>
          <img className='w-[70%]' src={formImg} alt="formImg" />
        </div>
      </div>
    </main>
  )
}

export default App