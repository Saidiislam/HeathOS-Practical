import React from 'react'

export const List = ({name, description, price, productImage}) => {
  return (
    <div className='box-border flex items-center border-b-[3px] py-2'>
        <div 
        // className='flex-none w-14 h-14'
        >
          <img src={productImage} alt={name}/>
        </div>
        <div 
        // className='grow h-14 leading-6'
        >
            <h3>{name}</h3>
            <p className='text-ellipsis whitespace-nowrap overflow-hidden '>{description}</p>
            <p>{price}</p>
        </div>
        <div 
        // className='flex-none w-14 h-14 justify-items-center'
        >
            <button>View</button>
        </div>
    </div>
  )
}
