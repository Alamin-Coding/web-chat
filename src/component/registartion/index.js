import React, { useState } from 'react';
import { RiEyeFill, RiEyeCloseFill } from 'react-icons/ri';

const Registration = () => {

  //Conditional icon
  let [passwordShow, setPasswordShow] = useState(false);
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
                <input className='rounded-lg border-border border py-6 px-12 w-96' type={passwordShow?"text":"password"} id='email' />
                <label className='absolute top-[-12px] left-[12px] bg-white px-3' htmlFor="email">Password</label>
                <div className='absolute top-[28px] right-2'>
                  {passwordShow ?
                    <RiEyeFill onClick={() => setPasswordShow(!passwordShow)} /> :
                    <RiEyeCloseFill onClick={() => setPasswordShow(!passwordShow)} /> 
                  }
              </div>
              </div>
            </div>

            <div className=' mt-8'>
              <button className='w-full rounded-full py-[19px] px-[130px] text-white font-nunito font-medium bg-btncolor' type='submit'>Sign Up</button>
            </div>

            <div className='mt-6'>
              <p className='text-center'>Already  have an account ? <a className='text-orange-500' href="/">Sign In</a></p>
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