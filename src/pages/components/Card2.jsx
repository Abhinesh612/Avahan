import React from 'react'

const Card2 = ({username = "Apka Naam" , domain = "domain", href = "https://instagram.com" }) => {
  return (
    <>
    <div  >
    <div >
    <div className="max-w-sm bg-white border border-gray-200   dark:bg-transparent dark:border-collapse rounded-3xl shadow-lg " >
     <a href="#" className=' rounded-full p-8'> 
        {/* <div className='rounded-full' > */}
        <img className="rounded-3xl p-4 mt-8 " src="\src\assets\AAhvan.jpeg" alt="" />
        {/* </div> */}
     </a>  
    <div className="p-5">
        
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{username}</h5>
            <p className='text-center text-slate-600 '>{domain}</p>
    </div>
    </div>
    </div>

    {/* <div  class='card-side back' className='text-center  '>
        hii
    </div> */}
</div>
    </>
  )
}

export default  Card2