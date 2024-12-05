import React from 'react'

const Card4 = ({name = "Name" ,domain = "Domain"}) => {
  return (
    <>
     <div className=' bg-purple-100 border-transparent h-15 w-40  py-3 text-center text-gray-950 rounded-2xl'>
          <b>{name}</b> <br /> {domain}
     </div>
    </>
  )
}

export default Card4