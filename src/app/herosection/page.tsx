
import React from 'react'

function HeroSection() {
  return (
    <>
    < section className="relative w-[1046px] h-[1028px] top-[104px] left-[197px] py-[80px] gap-[80px] ">
      <header className='text-center'>
      <h2 className="font-sans text-[16px] font-bold leading-[24px] text-[rgba(35,166,240,1)]">Welcome</h2>
      <h2 className="text-4xl font-58px mt-2 text-white font-montserra-700 line-80px letter-0.2px">
          Selling on the<br/> 
          internet like a pro</h2>
        <p className="text-lg mt-4 px-4 max-w-2xl mx-auto text-white font-montserrat-400 font-20px line-30px letter-0.2">
          We know how large objects will act, but things on a <br/> 
          small scale just do not act that way.
        </p>
        <div className="mt-8 space-x-4">
          <button className="bg-[#23A6F0]  text-white py-2 px-4 rounded-5 hover:bg-blue-600 ">Get Quote Now</button>
          <button className="bg-transparent border border-blue-600 text-blue-500 py-2 px-4 rounded ">Learn More</button>
        </div>
      </header>

      <main className="py-16 w-[1046px] h-[292px] gap-[30px]  flex flex-col">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 ">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 mx-auto bg-[#FFDCD1] rounded mb-4 ml-2.5"></div>
            <h3 className="text-xl font-semibold text-left">Training Courses</h3>
            <div className="w-[50px] h-[2px] bg-red-600 mb-4 mt-2"></div>
            <p className="text-gray-600 mt-2 text-left font-montserrat-400 font-14px letter-0.2px line-20px">The gradual accumulation of <br/>information about atomic and small-
    <br/>scale behaviour...
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 mx-auto bg-[#B9EAA8] rounded mb-4 ml-2.5"></div>
            <h3 className="text-xl font-semibold text-left">2,769 Online Courses</h3>
            <div className="w-[50px] h-[2px] bg-red-600 mb-4 mt-2"></div>

            <p className="text-gray-600 mt-2 text-left font-montserrat-400 font-14px letter-0.2px line-20px ">
              The gradual accumulation of <br/>information about atomic and small-<br/>scale behaviour...
            </p>
          </div>
          <div className="bg-[#23A6F0] rounded-lg shadow-md p-6 text-center">
            <div className="w-12 h-12 mx-auto bg-blue-100 rounded mb-4 ml-2.5"></div>
            <h3 className="text-xl font-semibold text-left text-white">Special Feature</h3>
            <div className="w-[50px] h-[2px] bg-white mb-4 mt-2"></div>

            <p className="text-white mt-2 text-left font-montserrat-400 font-14px letter-0.2px line-20px">
              The gradual accumulation of<br/> information about atomic and small-<br/>scale behaviour...
            </p>
          </div>
        </div>
      </main>
    </section>
</>
  )
}

export default HeroSection





