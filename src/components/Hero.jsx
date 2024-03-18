// eslint-disable-next-line no-unused-vars
import React from 'react';
import banner from '../assets/imgs/bannernew.png';
import {FaLinkedin, FaGithub, FaTwitter, FaInstagram} from 'react-icons/fa';


const Hero = () => {
  
  return (
    <section 
    id='home'
    className='min-h-screen flex py-10 md:flex-row flex-col items-center'
    >
      <div className='flex-1 flex items-center justify-center h-full '>
        <img src={banner} alt="PauloDEV" 
        className='md-w-11/12 h-80 object-cover'/>
      </div>
      <div className='flex-1'>
        <div className='md:text-left text-center mt-4'>
          <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold'>
            <span className='text-blue-800 md:text-6xl text-5xl'>
              Front-End
            </span >
            <br />
            <span className='md:text-4xl text-4xl'>Paulo Cesar</span>
          </h1>
          <p></p>
          <h4 className='md:text-1xl text-lg md:leading-normal leading-6 mt-4 semi-bold text-gray-400'>Sou um muito criativo e pratico, onde minha meta como desenvolvedor fron-end é criar interfaces agradáveis e ituitivas que ofereça uma jornada satisfatória para os usuários. </h4>
          <a href="../assets/Paulo_Cesar_curriculo_PT.pdf" download="Paulo_Cesar_curriculo_PT.pdf">
    <button className='btn-primary hover:bg-blue-400 mt-10'>Download Currículo</button>
</a>


          <div className='mt-8 text-3xl  flex items-center md:justify-start justify-center gap-5'>
            <a 
            href="https://www.linkedin.com/in/paulo-cesar-92a95623a/"
            target="blank"
            rel="noopener noreferrer"
            >
              <FaLinkedin className=' hover:bg-blue-800 rounded-3xl' />
            </a>
            <a href="https://github.com/PauloAquarius0299" target='blank' 
            rel="noopener noreferrer">
              <FaGithub className='hover:bg-blue-800 rounded-3xl' />
            </a>
            <a href="#"
            target="blank"
            rel="noopener noreferrer">
              <FaTwitter className='hover:bg-blue-800 rounded-3xl' />
            </a>
            <a href="https://www.instagram.com/pcgsantos99/"
            target="blank"
            rel="noopener noreferrer"
            className='hover:bg-blue-800 rounded-3xl'
            >
              <FaInstagram   />
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero