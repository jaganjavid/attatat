import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth, db} from "../../FirebaseConfig";

const Login = () => {

  const [formData, setFormData] = useState({
    email:"jaganjavid@gmail.com",
    password:"123456",
    error:"",
    loading:true
  })

  const {email, password, error} = formData;

  const navigate = useNavigate();

  const handleChange = (e) => {
   setFormData((prevState) => ({
     ...prevState,
     [e.target.id]: e.target.value
   }))
  }


  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      const useCredential = await signInWithEmailAndPassword(auth, email, password);

      if(useCredential.user){
        navigate("/");
      }
    }catch(error){
       toast.error("Bad User Crediantial")
    }



  }

  return (

   <div className='card max-w-xl mx-auto bg-base-500 shadow-xl p-8 mt-5'>
    <h1 className='text-4xl mb-3'>Login</h1>
    <p>{error && error}</p>    
    <div className='flex justify-center items-center'>
       <form className='w-full' onSubmit={handleSubmit}>
         <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
             <input type="email" placeholder="Email" 
             name="email" id='email' className="input input-bordered input-md w-full max-w-2xl" 
             value={email} onChange={handleChange}/>
          </div>
         <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
             <input type="password" placeholder="Password" 
             name="password" id='password' className="input input-bordered input-md w-full max-w-2xl" 
             value={password} onChange={handleChange}/>
          </div>
          <button type='submit' className="btn btn-active btn-primary">Submit</button>
       </form>
    </div>

    <p className='mt-5'>Don't Have an Account? <Link to="/auth/register" className='text-sky-400'>Register</Link></p>
   </div> 
 
  )
}

export default Login