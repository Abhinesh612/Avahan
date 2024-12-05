import React from 'react'
import './Card1.css'


const Card1 = ({username = "Name" , insta = "https://instagram.com" , linkedin = "https://linkedin.com" }) => {
  const style = {
  width: '150px',
  height: '150px'
};
  return (
    <>
    <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="\src\assets\pexels-anastasiya-gepp-654466-1462630.jpg" className='rounded-xl' alt="Avatar"   />
    </div>
    <div class="flip-card-back"  >
      {/* <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p> */}
      <h1 className='text-white text-xll'>{username}</h1>

      <div className='flex gap-3'>
      <a href={insta}><img src="\src\assets\svgs\insta.svg" alt="" className='size-10'/></a>
      <a href={linkedin}><img src="/src/assets/svgs/linkedin.svg" alt="" className='size-10' /></a>
      </div>
    </div>
  </div>
  {/* <button className='bg-slate-500 px-2 py-1 m-2 rounded-lg '>Sanju</button> */}
</div>
    </>
  )
}

export default Card1