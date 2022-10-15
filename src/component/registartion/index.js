import React from 'react'

const Registration = () => {
  return (
    <div>
      <div className='container mx-auto flex items-center'>
        <div className='w-2/4 pl-6 '>
          <h1 className='text-primary text-4xl font-nunito font-bold'>Get started with easily register</h1>
          <p className='text-secondary text-xl font-nunito font-normal'>Free register and you can enjoy it</p>
          <div className='w-96'>
            <div className=''>
              <div className='mt-8 relative'>
                <input className='rounded-lg border-border border py-6 px-12 w-96' type="email" id='email' />
                <label className='absolute top-[-12px] left-[12px] bg-white px-3' htmlFor="email">Email Address</label>
              </div>
            </div>

            <div className=''>
              <div className='mt-8 relative'>
                <input className='rounded-lg border-border border py-6 px-12 w-96' type="text" id='email' />
                <label className='absolute top-[-12px] left-[12px] bg-white px-3' htmlFor="email">Full name</label>
              </div>
            </div>

            <div className=''>
              <div className='mt-8 relative'>
                <input className='rounded-lg border-border border py-6 px-12 w-96' type="password" id='email' />
                <label className='absolute top-[-12px] left-[12px] bg-white px-3' htmlFor="email">Password</label>
              </div>
            </div>

            <div className=' mt-8'>
              <button className='w-full rounded-full py-[19px] px-[130px] text-white font-nunito font-medium bg-btncolor' type='submit'>Sign Up</button>
            </div>

            <div>
              <p className='text-center'>Already  have an account ? <a href="/">Sign In</a></p>
            </div>
          </div>
        </div>
        <div className='w-2/4'>
          <img className='h-screen w-full object-cover' src="images/registration.png" alt="pic" />
        </div>
      </div>
    </div>
  )
}

export default Registration