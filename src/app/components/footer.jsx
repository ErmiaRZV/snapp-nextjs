import React from 'react'
import '../css/fontello.css'
export default function Footer() {
  return (
    <footer className='w-full bg-[#f2f5f7] border-t h-[10vh] flex flex-wrap 2xl:container mx-auto' >
        <MyName />
        <MySocial />
    </footer>
  )
}


function MyName(){
    return(
        <h1 className='flex text-[#404040] justify-center items-center h-full w-1/2'>
            ارمیا رضوی
        </h1>
    )
}
function MySocial(){
    return(
        <nav className='w-1/2 h-full flex'>
            <ul className='w-full h-full flex flex-wrap items-center justify-center gap-2' >
                <li><a target='_blank' href="https://linkedin.com/in/ermia-razavi-a611312a3" className=' text-[#404040] duration-300 hover:text-[#20ab58] p-2 icon-linkedin' ></a></li>
                <li><a target='_blank' href="https://github.com/ErmiaRZV" className=' text-[#404040] duration-300 hover:text-[#20ab58] p-2 icon-github-circled' ></a></li>
            </ul>
        </nav>
    )
}