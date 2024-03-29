import React, { useState } from 'react';
import { RiEyeCloseFill, RiEyeFill } from 'react-icons/ri';
import { Dna } from 'react-loader-spinner';
import { toast, ToastContainer } from 'react-toastify';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, updateProfile  } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate()
  const auth = getAuth();
  let [email, setEmail] = useState("");
  let [fullName, setFullName] = useState("");
  let [password, setPassword] = useState("");
  

//Error Massage
  let [emailErr, setEmailErr] = useState("");
  let [fullNameErr, setFullNameErr] = useState("");
  let [passwordErr, setPasswordErr] = useState("");

  
  let [passwordShow, setPasswordShow] = useState(false); //Conditional icon
  let [loading, setLoading] = useState(false); //Loading Animation 
 
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
    if (email && fullName && password) {
      createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        updateProfile(auth.currentUser, {
          displayName: fullName,
          photoURL: 'images/profile.png'
        })
      })
      .then(() => {
        setLoading(true)
        setEmail("")
        setFullName("")
        setPassword("")
        toast.success('🦄 Registration Successfully , Please verify your email!', {
          position: "top-center",
          autoClose: 1000,
          theme: "dark",
          });
          setTimeout(() => { //Loading Button animation
            setLoading(false)
            navigate("/login")
          },1700)
          sendEmailVerification(auth.currentUser)
      })
      .catch((error) => {
        if (error.code.includes("auth/email-already-in-use")) {
          setEmailErr("Email-already-in-use")
        }
      });
    } 
  }

  return (
    <div className='registration'>
        <ToastContainer />
        {/* {success && (
            <p className='py-2 text-white text-center bg-lime-700'>{success}</p>
        )} */}
      <div className='container mx-auto flex items-center flex-col-reverse md:flex-row'>
        <div className='w-full md:w-2/4 md:pl-6 '>
          <h1 className='text-primary text-xl md:text-[1.3em]  xl:text-4xl lg:text-2xl font-nunito font-bold'>Get started with easily register</h1>
          <p className='text-secondary text-[18px] lg:text-xl font-nunito font-normal'>Free register and you can enjoy it</p>
          <div className='w-full md:w-10/12 lg:w-96'>

            <div className='mt-8 relative'>
              <input className='rounded-lg border-border border py-3 md:py-6 px-3 md:px-12 w-full lg:w-96' type="text" id='text' onChange={handleFullName} value={fullName} />
              <label className='absolute top-[-10px] md:top-[-12px] left-[12px] bg-white px-3 text-sm md:text-base' htmlFor="email">Full name</label>
            </div>
            {fullNameErr && (
              <span className='text-red-400'>{fullNameErr}</span>
            )}

            <div className='mt-8 relative'>
              <input className='rounded-lg border-border border py-3 md:py-6 px-3 md:px-12 w-full lg:w-96' type="email" id='email' onChange={handleEmail} value={email} />
              <label className='absolute top-[-10px] md:top-[-12px] left-[12px] bg-white px-3 text-sm md:text-base' htmlFor="email">Email Address</label>
            </div>
            {emailErr && (
              <span className='text-red-400'>{emailErr}</span>
            )}

            <div className='mt-8 relative'>
              <input className='rounded-lg border-border border py-3 md:py-6 px-3 md:px-12 w-full lg:w-96' type={passwordShow?"text":"password"} id='password' onChange={handlePassword} value={password} />
              <label className='absolute top-[-10px] md:top-[-12px] left-[12px] bg-white px-3 text-sm md:text-base' htmlFor="email">Password</label>
              <div className='absolute top-[19px] md:top-[28px] right-2'>
                {passwordShow ?
                  <RiEyeFill onClick={() => setPasswordShow(!passwordShow)} /> :
                  <RiEyeCloseFill onClick={() => setPasswordShow(!passwordShow)} /> 
                }
              </div>
            </div>
            {passwordErr && (
              <span className='text-red-400'>{passwordErr}</span>
            )}

            <div className=' mt-8'>
              {loading ?
                <button className='w-full rounded-full text-center text-white font-nunito font-medium bg-btncolor'>
                  <Dna
                    visible={true}
                    height="62"
                    width="132"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                  />
                </button>
                :
                <button className='w-full rounded-full py-2 md:py-[19px] text-center text-white font-nunito font-medium bg-btncolor' type='submit' onClick={handleForm}>Sign Up</button>
              }
            </div>

            <div className='mt-6'>
              <p className='text-center'>Already  have an account ? <Link className='text-orange-500' to="/login">Sign In</Link></p>
            </div>
          </div>
        </div>
        <div className='w-full md:w-2/4'>
          <img className='h-40 md:h-screen w-full object-cover' src="images/registration.png" alt="pic" />
        </div>
      </div>
    </div>
  )
}

export default Registration