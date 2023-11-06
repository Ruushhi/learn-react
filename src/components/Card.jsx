import React from 'react'
import { useSelector } from 'react-redux'

const Card = ({img, title, subtitle}) => {

    const username = useSelector((state)=>state.myData.username) 

  return (
    <div className='border-2 border-blue-500 p-3 m-3'>
        {username}
        <img src={`/assets/${img}`} alt="" />
        <p className='text-md'>{title}</p>
        <p className='text-sm'>{subtitle}</p>
      </div>
  )
}

export default Card
