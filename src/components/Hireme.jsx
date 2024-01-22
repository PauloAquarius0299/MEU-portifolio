// eslint-disable-next-line no-unused-vars
import React from 'react';
import hireMe from '../assets/imgs/hireme2.jpg';

const Hireme = () => {
  return (
    <section id='hireme' 
    className='py-10 px-3 text-white'
    >
      <div className='text-center'>
        <h3 className='text-4xl font-semibold'>
          Me <span className='text-blue-900'>Contrate</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg font-semibold'>Vamos trabalhar juntos </p>
      </div>
      <div className='bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem]mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center'>
        <div>
          <h2 className='text-2xl font-semibold'>Porque você deve me contratar?</h2>
          <p className='lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-400 leading-6'>
            Estou a disposição para contrato de trabalho em qualquer horário e dia, posso usar das minhas habilidades em HTML, CSS, JavaScript e React para desenvolver interfaces para seu site pessoal, ecommerce, dashboard, login page, aplicativo web, jogos etc... Além do meu conhecimento para machine learning em Python.
            <br />
            Sou versatil e com minhas habilidades em frameworks e bibiotecas como Tailwind, Sass, BootsTrap, Next.js, Vite, Vue.js e Angular acrescentaria a melhor estilização e praticidade para desenvolver satisfatorias interfaces para seu site pessoal, empresa e até conhecimento pessoal.
            <br />
            Estou a disposição para qualquar contato pelas redes-sociais, email ou meu numero
          </p>
          <button id='contacts' className='btn-primary mt-10 hover:bg-cyan-400'>Meus Contatos</button>
        </div>
        <img src={hireMe} alt="" 
        className='h-60  -right-3 object-cover'
        />
      </div>
    </section>
  )
}

export default Hireme