import React from 'react'
import Card from './components/Card'
// import { useSelector } from 'react-redux'

const Example1 = ({username}) => {

  // const username = useSelector((state)=>state.myData.username)


  const stadiumArray = [
    {img: "img1.jpeg", title: "Ahmedabad", subtitle: "Ahmedabad Stadium"}, 
    {img: "img2.jpeg", title: "Mumbai", subtitle: "Wankhede Stadium"}, 
    {img: "img3.jpeg", title: "Delhi", subtitle: "Delhi Stadium"}, 
    {img: "img4.jpeg", title: "Chennai", subtitle: "MA Stadium"}, 
  ]

  return (
    <div>
      <p className="text-xl">{username}</p>
      <div className='flex items-center justify-center gap-3'>

      
      {
        stadiumArray.map((obj, index)=>{
            return <Card username={username} img={obj.img} title={obj.title} subtitle={obj.subtitle} />
        })
      }
      
    </div>
    </div>
  )
}

export default Example1
