import React, { useState } from 'react';
import { RiEyeFill, RiEyeCloseFill } from 'react-icons/ri';

const Registration = () => {
  let [email, setEmail] = useState("");
  let [fullName, setFullName] = useState("");
  let [password, setPassword] = useState("");

//Error Massage
  let [emailErr, setEmailErr] = useState("");
  let [fullNameErr, setFullNameErr] = useState("");
  let [passwordErr, setPasswordErr] = useState("");

  let handleEmail = (e) => {
    setEmail(e.target.value.trim());
    setEmailErr("");
  }
  
  let handleFullName = (e) => {
    setFullName(e.target.value.trim());
    setFullNameErr("");
  }
  let handlePassword = (e) => {
    setPassword(e.target.value.trim());
    setPasswordErr("");
  }

  let handleForm = () => {
    if (!email) {
      setEmailErr("Email is Required")
    }else{
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailErr("Invalid Email")
      }
    }
    if (!fullName) {
      setFullNameErr("Full Name is Required")
    }
    if (!password) {
      setPasswordErr("Password is Required")
    }else{
      if (!/^(?=.*[a-z])/.test(password)) {
        setPasswordErr("Password must contain at least 1 lowercase alphabetical character")
      }
      if (!/^(?=.*[A-Z])/.test(password)) {
        setPasswordErr("Password must contain at least 1 uppercase alphabetical character")
      }
      else if (!/^(?=.*[0-9])/.test(password)) {
        setPasswordErr("Password must contain at least 1 numeric character")
      }
      else if (!/^(?=.*[!@#$%^&*])/.test(password)) {
        setPasswordErr("Password must contain at least one special character")
      }
      else if (!/^(?=.{8,})/.test(password)) {
        setPasswordErr("Password  must be eight characters or longer")
      }
    }
  }

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
                <input className='rounded-lg border-border border py-6 px-12 w-96' type="email" id='email' onChange={handleEmail} />
                <label className='absolute top-[-12px] left-[12px] bg-white px-3' htmlFor="email">Email Address</label>
              </div>
              {emailErr && (
                <span className='text-red-400'>{emailErr}</span>
              )}
            </div>

            <div className=''>
              <div className='mt-8 relative'>
                <input className='rounded-lg border-border border py-6 px-12 w-96' type="text" id='text' onChange={handleFullName} />
                <label className='absolute top-[-12px] left-[12px] bg-white px-3' htmlFor="email">Full name</label>
              </div>
              {fullNameErr && (
                <span className='text-red-400'>{fullNameErr}</span>
              )}
            </div>

            <div className=''>
              <div className='mt-8 relative'>
                <input className='rounded-lg border-border border py-6 px-12 w-96' type={passwordShow?"text":"password"} id='password' onChange={handlePassword} />
                <label className='absolute top-[-12px] left-[12px] bg-white px-3' htmlFor="email">Password</label>
                <div className='absolute top-[28px] right-2'>
                  {passwordShow ?
                    <RiEyeFill onClick={() => setPasswordShow(!passwordShow)} /> :
                    <RiEyeCloseFill onClick={() => setPasswordShow(!passwordShow)} /> 
                  }
                </div>
              </div>
              {passwordErr && (
                <span className='text-red-400'>{passwordErr}</span>
              )}
            </div>

            <div className=' mt-8'>
              <button className='w-full rounded-full py-[19px] px-[130px] text-white font-nunito font-medium bg-btncolor' type='submit' onClick={handleForm}>Sign Up</button>
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