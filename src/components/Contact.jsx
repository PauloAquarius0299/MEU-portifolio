// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'

const Contact = () => {
  const contact_info = [
    {
      logo: 'mail', text: 'paulocgsantos99@gmail.com'},
      {logo: 'logo-whatsapp', text: '(31) 9 90849883'},
      {
        logo: 'location',
        text: 'Belo Horizonte, MG - Brasil',
      }
  ]

  return (
    <section id='contact' className='py-10 px-3 text-white'>
      <div className='text-center mt-8'>
        <h3 className='text-4xl font-semibold'>
          Meus <span className='text-blue-700'>Contatos</span>
        </h3>
        <p className='text-gray-400 mt-3 text-lg'>Entre em Contato</p>

        <div className='mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto'>
          <form className='flex flex-col flex-1 gap-5'>
            <input type="text" placeholder='Seu Nome' />
            <input type="Email" placeholder='Seu Endereço de Email' />
            <textarea placeholder='Sua Menssagem' rows={10}></textarea>
            <button className='btn-primary w-fit hover:bg-cyan-600'>Enviar Menssagem</button>
          </form>
          <div className='flex flex-col gap-7'>
            {
              contact_info.map((contact, i)=>(
                <div key={i} className='flex gap-4 w-fit items-center'>
              <div className='min-w-[3.5rem] text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full'
              
              >
                <ion-icon name={contact.logo}></ion-icon>
                
              </div>
              <p className='text-lg'>{contact.text}</p>
            </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact