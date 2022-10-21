import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const Forgotpassword = () => {
    const auth = getAuth();
    let [email, setEmail] = useState("");

    let handleEmail = (e) => {
        setEmail(e.target.value.trim())
    }
    let handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Check Email")
        })
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode)
        });
    }

  return (
    <div className='h-screen w-full bg-slate-300 grid grid-cols-1  items-center justify-items-center'>
        <div className='rounded-lg bg-white shadow p-3 w-1/2'>
            <h3 className='p-2 text-2xl font-medium font-nunito text-gray-800 text-center'>Reset Your Password</h3>
            <div className='pb-8 pt-6'>
                <input className='rounded-lg border-gray-300 focus:outline-0 border py-6 px-12 w-full' type="email" placeholder='Enter your email' onChange={handleEmail} />
            </div>
            <div className='flex justify-center gap-3 items-center'>
                <button className='w-1/3 rounded-md py-2 text-center text-white font-nunito font-medium bg-btncolor hover:bg-indigo-600' onClick={handleResetPassword}>Reset Password</button>
                <Link to="/login" className='w-1/3 rounded-md py-2 text-center text-white font-nunito font-medium bg-btncolor hover:bg-indigo-600'>Go Back</Link>
            </div>
        </div>
    </div>
  )
}

export default Forgotpassword