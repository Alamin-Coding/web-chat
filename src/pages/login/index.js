import React, { useState } from 'react';
import { RiEyeCloseFill, RiEyeFill } from 'react-icons/ri';
import { Dna } from 'react-loader-spinner';
import { toast, ToastContainer } from 'react-toastify';
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLoginInfo } from '../../slices/userSlice';

const Login = () => { 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const auth = getAuth();
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
  
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
        .then((user) => {
            setLoading(true)
            toast.success('🦄 Login Successfully', {
                position: "top-center",
                autoClose: 1000,
                theme: "dark",
            });
            dispatch(userLoginInfo(user.user));
            localStorage.setItem("userInfo", JSON.stringify(user))
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
        <div className='container mx-auto flex items-center flex-col-reverse md:flex-row'>
            <div className='w-full md:w-2/4 md:pl-6 '>
              <h1 className='text-primary text-xl md:text-[1.3em]  xl:text-4xl lg:text-2xl font-nunito font-bold'>Login to your account!</h1>
              <div className='w-full md:w-10/12 lg:w-96'>
                  <div className='mt-8'>
                      <label className='text-[##03014C] text-sm opacity-50 font-open font-normal ' htmlFor="email">Email Address</label>
                      <input className='border-gray-300 border-b py-3 md:py-6 w-full lg:w-96 focus:border-gray-300 focus:shadow-none focus:outline-none mt-[-5px] ' type="email" id='email' placeholder='Youraddres@email.com' onChange={handleEmail} />
                      {emailErr && (
                          <span className='text-red-400'>{emailErr}</span>
                      )}
                  </div>

                  <div className='mt-8 relative'>
                      <label className='text-[##03014C] text-sm opacity-50 font-open font-normal ' htmlFor="email">Password</label>
                      <input className='border-gray-300 border-b py-3 md:py-6 w-full lg:w-96 focus:border-gray-300 focus:shadow-none focus:outline-none mt-[-5px] ' type={passwordShow?"text":"password"} placeholder='Enter your password' onChange={handlePassword} />
                      {passwordErr && (
                          <span className='text-red-400'>{passwordErr}</span>
                      )}
                      <div className='absolute top-10 md:top-[54px] right-2'>
                          {passwordShow ?
                              <RiEyeFill onClick={() => setPasswordShow(!passwordShow)} /> :
                              <RiEyeCloseFill onClick={() => setPasswordShow(!passwordShow)} /> 
                          }
                      </div>
                  </div>

                  <div className=' mt-8'>
                    {loading ?
                      <button className='w-full rounded-full h-[40px] md:h-[60px] text-white font-nunito font-medium bg-btncolor flex justify-center'>
                        <Dna
                          visible={true}
                          height="100%"
                          width="132"
                          ariaLabel="dna-loading"
                          wrapperStyle={{}}
                          wrapperClass="dna-wrapper"
                        />
                      </button>
                      :
                      <button className='w-full rounded-full py-2 md:py-[19px] text-center text-white font-nunito font-medium bg-btncolor' type='submit' onClick={handleForm}>Login to Continue</button>
                    }
                  </div>

                  <div className='mt-6'>
                      <p className='text-center'>Don’t have an account ? <Link className='text-orange-500' to="/registration">Sign up</Link></p>
                      <p className='text-center'><Link className='text-orange-500' to="/forgot-password">Forgot Password</Link></p>
                  </div>
              </div>
            </div>
            <div className='w-full md:w-2/4'>
                <img className='h-40 md:h-screen w-full object-cover' src="images/login.png" alt="pic" />
            </div>
        </div>
    </div>
  )
}

export default Login