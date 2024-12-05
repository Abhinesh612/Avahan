import React from 'react';



const Card3 = ({username = "Name" , insta = "https://instagram.com" , linkedin = "https://linkedin.com" }) => {
  return (
    <>
    {/* <!-- https://gist.github.com/goodreds/5b8a4a2bf11ff67557d38c5e727ea86c --> */}

<div
    class="max-w-2xl mx-3 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16  shadow-xl rounded-lg text-gray-900">
    <div class="rounded-t-lg h-32 overflow-hidden">
        <img class="object-cover object-top w-full" src='https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Mountain'/>
    </div>
    <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
        <img class="object-cover object-center h-32" src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ' alt='Woman looking front' />
    </div>
    <div class="text-center mt-2">
        <h2 class="font-semibold">{username}</h2>
        <p class="text-gray-500"> Web Developer</p>
    </div>
    <ul class="py-4  px-28  mt-2 text-gray-700 flex items-center justify-around">
        <li class="flex flex-col items-center justify-around">
        <a href={insta} ><img src="\src\assets\instagram_15713420.png" alt="" className='size-10'/></a>
        </li>
        <li class="flex flex-col items-center justify-between">
        <a href={linkedin} ><img src="\src\assets\linkedin_3536505.png" alt="" className='size-10'/></a>    
        </li>
        <li class="flex flex-col items-center justify-around">
        <a href={insta} ><img src="\src\assets\github_536452.png" alt="" className='size-10'/></a>  
        </li>
    </ul>
    {/* <div class="p-4 border-t mx-8 mt-2">
        <button class="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Follow</button>
    </div> */}
</div>
    </>
  )
}

export default Card3