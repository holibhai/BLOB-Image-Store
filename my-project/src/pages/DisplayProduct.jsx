import React from 'react'
import p from "../assets/g-4.jpg";
import Product from './Product';





const DisplayProduct = () => {
    const data=[
        {id:1,name:'Product 1',price:100,img:p},
        {id:2,name:'Product 2',price:200,img:p},
        {id:3,name:'Product 3',price:300,img:p}
    ]
  return (
    <>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-center px-36 py-10'>

          {data.map((product,index)=>(
            <div key={index} className=''>
                 <Product product={product}/>
            </div>
          ))} 
          </div>
        
    
    </>
  )
}

export default DisplayProduct