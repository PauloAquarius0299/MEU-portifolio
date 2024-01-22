// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import project1 from '../assets/imgs/project1.png'
import project2 from '../assets/imgs/project2.png'
import project3 from '../assets/imgs/project3.png'
import project4 from '../assets/imgs/project4.png'
import project5 from '../assets/imgs/project5.png'
import project6 from '../assets/imgs/project6.png'
import project7 from '../assets/imgs/project7.png'
import projectsImg from '../assets/imgs/projects-img.png'


import 'swiper/css';
import 'swiper/css/pagination'

const Projects = () => {
  const projects = [
    {
      img: project1,
      name: 'Alugel de Carros',
      github_link: 'https://github.com/PauloAquarius0299/carros-aluguel-website',
      MEUS_PROJETOS: 'https://rococo-cupcake-cb68ca.netlify.app/',
    },
    {
      img: project2,
      name: 'Confetaria de Bolos',
      github_link: 'https://github.com/PauloAquarius0299/Cake-website',
      MEUS_PROJETOS: 'https://tranquil-fox-d8b7c2.netlify.app/',
    },
    {
      img: project3,
      name: 'Preservação Ambiental',
      github_link: 'https://github.com/PauloAquarius0299/animais-ong-website',
      MEUS_PROJETOS: 'https://pauloaquarius0299.github.io/animais-ong-website/',
    },
    {
      img: project4,
      name: 'Viagem Brasil',
      github_link: 'https://github.com/PauloAquarius0299/travell-brazil-website?tab=readme-ov-file',
      MEUS_PROJETOS: 'https://viagem-brasil-website.netlify.app/',
    },
    {
      img: project5,
      name: 'Lar Perfeito',
      github_link: 'https://github.com/PauloAquarius0299/larperfeito-website?tab=readme-ov-file',
      MEUS_PROJETOS: 'https://larperfeito-web.netlify.app/',
    },
    {
      img: project6,
      name: 'Satellite Website',
      github_link: 'https://github.com/PauloAquarius0299/satellite-website?tab=readme-ov-file',
      MEUS_PROJETOS: 'https://satellite-website-info.netlify.app/',
    },
    {
      img: project7,
      name: 'GameStore Website',
      github_link: 'https://github.com/PauloAquarius0299/game-webstory-mobile',
      MEUS_PROJETOS: 'https://super-klepon-cc7b54.netlify.app/',
    },
  ]


  return (
    <section id='projects' className='py-10 text-white'>
      <div className='text-center'>
        <h3 className='text-4xl font-semibold'>
          Meus <span className='text-blue-900'>Projetos</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg font-semibold'>Alguns do meus Projetos </p>
      </div>
      <br />
      {/*PROJETOS*/}
      <div className='flex max-w-6xl px-5 mx-auto items-center relative'>
      <div className='lg:w-2/3 w-full'>
        <Swiper
        slidesPerviw={1.2}
        spaceBetween={20}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
          768: {
            slidesPerView: 2,
          }
          
        }}
        loop={true}
        autoplay={{
          delay:3000,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        >
          {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-white hover:bg-cyan-600 bg-gray-800 px-2 py-1 inline-block" rel="noreferrer"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.MEUS_PROJETOS}
                      target="_blank"
                      className="text-white hover:bg-cyan-600 bg-gray-800 px-2 py-1 inline-block" rel="noreferrer"
                    >
                      VER O PROJETO
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            
          
        </Swiper>
      </div>
      <div className='lg:block hidden'>
        <img src={projectsImg} alt="" style={{ marginLeft: '60px' }} />
      </div>
      </div>
      
    </section>
  )
}

export default Projects