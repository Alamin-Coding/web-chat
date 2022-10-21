import React, { useState } from 'react';
import { RiEyeCloseFill, RiEyeFill } from 'react-icons/ri';
import { Dna } from 'react-loader-spinner';
import { toast, ToastContainer } from 'react-toastify';
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => { 
    const navigate = useNavigate()
    const auth = getAuth();
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    
    //Success Massage
    let [success, setSuccess] = useState("");
  
  //Error Massage
    let [emailErr, setEmailErr] = useState("");
    let [passwordErr, setPasswordErr] = useState("");
  
    
    let [passwordShow, setPasswordShow] = useState(false); //Conditional icon
    let [loading, setLoading] = useState(false); //Loading Animation 
   
    let handleEmail = (e) => {
      setEmail(e.target.value.trim());
      setEmailErr("");
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
      if (!password) {
        setPasswordErr("Password is Required")
      }
      if (email && password && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            setLoading(true)
            toast.success('🦄 Login Successfully', {
                position: "top-center",
                autoClose: 1000,
                theme: "dark",
            });
            setTimeout(()=> {
                navigate("/")
                setLoading(false)
            },2000)
        })
        .catch((error) => {
            const errorCode = error.code;
            console.log(errorCode);
            (errorCode === "auth/user-not-found") ? setEmailErr("User-not-found") : setPasswordErr("wrong-password");
            
        });
        
      } 
    }
  
  return (
    <div>
        <ToastContainer />
        <p className='py-2 bg-green-900 text-white text-center'>{success}</p>
        <div className='container mx-auto flex items-center'>
            <div className='w-2/4 pl-6 '>
            <h1 className='text-primary text-4xl font-nunito font-bold'>Login to your account!</h1>
            <div className='w-96'>
                <div className='mt-8'>
                    <label className='text-[##03014C] text-sm opacity-50 font-open font-normal ' htmlFor="email">Email Address</label>
                    <input className='border-gray-300 border-b py-6 w-96 focus:border-gray-300 focus:shadow-none focus:outline-none mt-[-5px] ' type="email" id='email' placeholder='Youraddres@email.com' onChange={handleEmail} autocomplete="on" />
                    {emailErr && (
                        <span className='text-red-400'>{emailErr}</span>
                    )}
                </div>

                <div className='mt-8 relative'>
                    <label className='text-[##03014C] text-sm opacity-50 font-open font-normal ' htmlFor="email">Password</label>
                    <input className='border-gray-300 border-b py-6 w-96 focus:border-gray-300 focus:shadow-none focus:outline-none mt-[-5px] ' type={passwordShow?"text":"password"} placeholder='Enter your password' onChange={handlePassword} />
                    {passwordErr && (
                        <span className='text-red-400'>{passwordErr}</span>
                    )}
                    <div className='absolute top-[54px] right-2'>
                        {passwordShow ?
                            <RiEyeFill onClick={() => setPasswordShow(!passwordShow)} /> :
                            <RiEyeCloseFill onClick={() => setPasswordShow(!passwordShow)} /> 
                        }
                    </div>
                </div>

                <div className=' mt-8'>
              {loading ?
                <button className='w-full rounded-full px-[130px] text-white font-nunito font-medium bg-btncolor'>
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
                <button className='w-full rounded-full py-[19px] text-center text-white font-nunito font-medium bg-btncolor' type='submit' onClick={handleForm}>Login to Continue</button>
              }
            </div>

                <div className='mt-6'>
                    <p className='text-center'>Don’t have an account ? <Link className='text-orange-500' to="/registration">Sign up</Link></p>
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