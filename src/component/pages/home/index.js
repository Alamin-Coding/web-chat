import React from 'react'
// import profile_img from '../../../../public/images/profile.png'
const Home = () => {
  return (
    <div className='grid gap-3 md:gap-6 grid-flow-row-dense grid-cols-12 px-3'>
      {/* Menu */}
      <div className='col-span-12 sm:col-span-2 pr-1 md:pr-5'>
        <div className=' bg-primary rounded-sm md:rounded-2xl px-11 py-9 flex flex-col items-center'>
          <div className='w-12 md:w-20 lg:w-[100px] h-12 md:h-20 lg:h-[100px] rounded-full bg-white'>
            <img src="images/profile.png" alt="profile pic" />
          </div>
        </div>
      </div>
      {/* Items */}
      <div className='col-span-12 sm:col-span-10'>
        <div className='grid gap-3 md:gap-5 grid-flow-row-dense grid-cols-10'>
          <div className='col-span-10 md:col-span-4 bg-primary rounded-sm md:rounded-2xl'>
              Item-1
          </div>
          <div className='col-span-10 md:col-span-3 bg-primary rounded-sm md:rounded-2xl'>
              Item-2
          </div>
          <div className='col-span-10 md:col-span-3 bg-primary rounded-sm md:rounded-2xl'>
              Item-3
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home