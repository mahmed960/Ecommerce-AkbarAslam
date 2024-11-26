import Image from 'next/image'
import React from 'react'

const header = () => {
  return (
    <header className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-24 items-center justify-between">
        
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="#">
          <span className="sr-only">Home</span>
          <Image src="https://www.akbaraslam.com/cdn/shop/files/Akbar_Aslam_Logo-small1_a93da462-6269-4282-a9a1-faa73161b336_225x@2x.png?v=1630557805" alt="" width={180} height={80}/>
         
        </a>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Homes </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> 11.11 Sale </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> CO-ORDS </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Lawn </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Formals </a>
            </li>

            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> PRET </a>
            </li>
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Bridal </a>
            </li>
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> New Arrival </a>
            </li>
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#"> Best Sellers </a>
            </li>
            <li>
              <a className="text-gray-500 transition hover:text-gray-500/75" href="#">About</a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
        

          <div className="block md:hidden">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}

export default header