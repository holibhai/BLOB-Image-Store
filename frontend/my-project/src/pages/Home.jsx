import React from 'react'
 
import g from '../assets/g-1.jpg';

const Home = () => {
  return (
    <>
       <div className='px-20 font-quickSand'>
            <div className='grid grid-col-1 md:grid-cols-2 items-center'>
                   <div className='mt-32'>
                        <h1 className='text-3xl '> <span className='font-semibold text-5xl'>BLOB-IMAGE-</span><span className='text-blue-600 font-semibold text-5xl'>GALLERY</span> understanding storage Concept using
                            <br />  SpringBoot&React with Mysql

                        </h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga praesentium quibusdam exercitationem at beatae explicabo natus facere atque ducimus aut.</p>
                   </div>
                   <div className='mt-32 ]'>
                         
                        <img src={g} alt="history2" className='h-64 object-cover'/>

                   </div>
            </div>
       </div>
    
    </>
  )
}

export default Home