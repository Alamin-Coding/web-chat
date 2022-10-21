import React from 'react'

const Login = () => {
  return (
    <div>
        <div className='container mx-auto flex items-center'>
            <div className='w-2/4 pl-6 '>
            <h1 className='text-primary text-4xl font-nunito font-bold'>Login to your account!</h1>
            <div className='w-96'>
                <div className='mt-8'>
                    <label className='text-[##03014C] text-sm opacity-50 font-open font-normal ' htmlFor="email">Email Address</label>
                    <input className='border-gray-300 border-b py-6 w-96 focus:border-gray-300 focus:shadow-none focus:outline-none mt-[-5px] ' type="email" id='email' placeholder='Youraddres@email.com' />
                </div>

                <div className='mt-8'>
                    <label className='text-[##03014C] text-sm opacity-50 font-open font-normal ' htmlFor="email">Password</label>
                    <input className='border-gray-300 border-b py-6 w-96 focus:border-gray-300 focus:shadow-none focus:outline-none mt-[-5px] ' type="passwordShow" placeholder='Enter your password' />
                </div>

                <div className=' mt-8'>
                    <button className='w-full rounded-md py-[19px] text-center text-white font-nunito font-medium bg-btncolor' type='submit' >Login to Continue</button>
                </div>

                <div className='mt-6'>
                    <p className='text-center'>Don’t have an account ? <a className='text-orange-500' href="/">Sign up</a></p>
                </div>
            </div>
            </div>
            <div className='w-2/4'>
                <img className='h-screen w-full object-cover' src="images/login.png" alt="pic" />
            </div>
        </div>
    </div>
  )
}

export default Login