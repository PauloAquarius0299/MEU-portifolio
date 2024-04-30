// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';

import project1 from '../assets/imgs/project-1.png'
import project2 from '../assets/imgs/project2.png'
import project3 from '../assets/imgs/project3.png'
import project4 from '../assets/imgs/project4.png'
import project5 from '../assets/imgs/project5.png'
import project6 from '../assets/imgs/project6.png'
import project7 from '../assets/imgs/project7.png'
import project8 from '../assets/imgs/project8.png'

import 'swiper/css';
import 'swiper/css/pagination'


const Projects = () => {
  const projects = [
    {
      img: project1,
      name: 'ChatSpace Web',
      github_link: 'https://github.com/PauloAquarius0299/chatspace-app-fullstack?tab=readme-ov-file',
      MEUS_PROJETOS: 'https://chatspace-app-fullstack.onrender.com/login',
    },
    {
      img: project2,
      name: 'ViageReserve',
      github_link: 'https://github.com/PauloAquarius0299/viagereserve-app',
      MEUS_PROJETOS: 'https://www.linkedin.com/feed/update/urn:li:activity:7190695008222515200/',
    },
    {
      img: project3,
      name: 'TechWaves Website',
      github_link: 'https://github.com/PauloAquarius0299/techwaves-ecommerce-website?tab=readme-ov-file',
      MEUS_PROJETOS: 'https://techwaves-pcdev.netlify.app/',
    },
    {
      img: project4,
      name: 'Italian Restaurant',
      github_link: 'https://github.com/PauloAquarius0299/italian-restaurante-web?tab=readme-ov-file',
      MEUS_PROJETOS: 'https://italianrestaurant-web.netlify.app/',
    },
    {
      img: project5,
      name: 'CartShopping-Striper',
      github_link: 'https://github.com/PauloAquarius0299/CartShopping-Striper?tab=readme-ov-file',
      MEUS_PROJETOS: 'https://www.linkedin.com/feed/update/urn:li:activity:7188638878151434240/',
    },
    {
      img: project6,
      name: 'Card Shopping',
      github_link: 'https://github.com/PauloAquarius0299/shopping-clothing-card',
      MEUS_PROJETOS: 'https://shopcardweb.netlify.app/',
    },
    {
      img: project7,
      name: 'SaborArt Açai Delivery',
      github_link: 'https://github.com/PauloAquarius0299/saborartacai-react-new/tree/main',
      MEUS_PROJETOS: 'https://saborartacai-novo.netlify.app/',
    },
    {
      img: project8,
      name: 'MovieFlix',
      github_link: 'https://github.com/PauloAquarius0299/movieflix-web-app',
      MEUS_PROJETOS: 'https://movieflix-paulodev.netlify.app/',
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
      
        <div className='flex justify-center'>
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
          modules={{}}
          >
            {projects.map((project_info, i) => (
                <SwiperSlide key={i}>
                  <div className="h-fit w-full  p-4 bg-slate-700 rounded-xl">
                    <img src={project_info.img} alt="projetos" className="rounded-lg " />
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
        </div>
        
      
    </section>
  )
}

export default Projects