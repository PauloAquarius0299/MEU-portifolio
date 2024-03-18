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
            Estou a disposição para contrato de trabalho em qualquer horário e dia, sou um programador versatil que gosta de usar da minha capacidade criativa para construir softwares na web e fazer diferença no mercado de tecnologia. 
            <br />
            Possuo habilidades de dois anos em HTML e CSS, e de um ano em JavaScript, React e Angular são frameworks na qual adquiri habilidades sólidas, especialmente React.Domínio da integração de API Rest em interfaces através do GraphQL. Conhecimentos básicos na utilização da ferramenta Firebase, especialmente na hospedagem de bancos de dados não relacionais NoSQL, trazendo eficiência e escalabilidade para os projetos que desenvolvo.Utilização das extensões em TypeScript, Tailwind, Next, Vite, Sass e Bootstrap, os quais utilizo para facilitar a criação e estilização de interfaces para web, desktop e mobile. Possuo conhecimentos básicos em Python para o desenvolvimento de soluções no BackEnd, agregando versatilidade aos meus conhecimentos.
            <br />
            
            <br />
            Estou a disposição para qualquar contato pelas redes-sociais, email ou meu numero
          </p>
          
        </div>
        <img src={hireMe} alt="" 
        className='h-60  -right-3 object-cover'
        />
      </div>
    </section>
  )
}

export default Hireme