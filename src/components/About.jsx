// eslint-disable-next-line no-unused-vars
import React from 'react';
import aboutImg from '../assets/imgs/about.png'

const About = () => {
  const info = [
    {text: 'Meses de Experiência', count: '06'},
    {text: 'Projetos Realizados', count: '30'},
  ]
  return (
    <section id='about' className='py-10 text-white'>
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold'>
          Sobre <span className='text-blue-800'>Min</span>
        </h3>
        <p className='text-white my-3 text-lg'>Introdução</p>
        <div className='flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 mx-w-6xl mx-auto'>
          <div className='p-2'>
            <div className='text-gray-300 my-3'> 
              <p className='text-justify leading-7'>
                Olá, meu nome é Paulo Cesar Gomes, sou um futuro programador front-end que mora em Belo Horizonte, MG. Sou muito criativo, adoro trabalhar em equipe e estou sempre pronto para solucionar problemas, presando pelo capricho e comunicação.
                <br />
                Foi na Universidade Pitágoras (Anhanguera) que tive meu primeiro contato com Desenvolvimento de Software, graças a seus ensinamentos e experiência autodidata com o Mozilla, aprendi a noção de Frameworks, bibliotecas, APIs, Ui/Ux Design, SEO, lógica, modelagem de dados, UML e Layouts na criação de agradáveis interfaces FrontEnd.
              </p>
              <div className='flex mt-10 items-center gap-7'>
                {
                  info.map((content) => (
                    <div key={content.text}>
                      <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                        {content.count}
                        <span className='text-blue-800'>+</span>{" "}
                      </h3>
                      <span className='md:text-base text-sx'>{content.text}</span>
                    </div>
                  ))
                }
              </div>
              <br />
              <br />
              <a href="../assets/Paulo_Cesar_curriculo_PT.pdf" download>
                <button className='btn-primary hover:bg-blue-400'>Download CV</button>
              </a>
            </div>
          </div>
          <div className='flex-1 md:mt-0 mt-6 flex justify-center items-center'>
            <div className='lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg'>
              <img src={aboutImg} alt="eu" 
              className='w-full object-cover rounded-xl'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About