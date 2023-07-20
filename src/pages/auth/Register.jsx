import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {auth, db} from "../../FirebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { setDoc, doc, serverTimestamp } from 'firebase/firestore';

const Register = () => {

  const [formData, setFormData] = useState({
    name:"jagan",
    email:"jaganjavid@gmail.com",
    password:"123456",
    loading:false
  })

  const {name, email, password, error, loading} = formData;

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

      setFormData({...formData, loading:true});

      const userCrediantial = await createUserWithEmailAndPassword(auth, email, password);
      
      const user = userCrediantial.user;

      updateProfile(auth.currentUser, {
        displayName: name
      })

      const formDataCopy = {...formData};

      delete formDataCopy.password
      delete formDataCopy.loading

      formDataCopy.online = true;

      formDataCopy.timeStamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);

      setFormData({...formData, loading:false});

      navigate("/");
    } catch(error){
      toast.error("Something went worng while registration");
    }
  }

  return (

   <div className='card max-w-xl mx-auto bg-base-500 shadow-xl p-8 mt-5'>
    <h1 className='text-4xl mb-3'>Create An Account</h1>
    <p>{error && error}</p>    
    <div className='flex justify-center items-center'>
       <form className='w-full' onSubmit={handleSubmit}>
         <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">What is your name?</span>
            </label>
             <input type="text" placeholder="Name" name="name" id='name'
             className="input input-bordered input-md w-full max-w-2xl" 
             value={name} onChange={handleChange}/>
          </div>
         <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
             <input type="email" placeholder="Email" id='email'
             name="email" className="input input-bordered input-md w-full max-w-2xl" 
             value={email} onChange={handleChange}/>
          </div>
         <div className="form-control mb-4">
            <label className="label">°
              <span className="label-text">Password</span>
            </label>
             <input type="password" placeholder="Password" id='password'
             name="password" className="input input-bordered input-md w-full max-w-2xl" 
             value={password} onChange={handleChange}/>
          </div>
          
          {loading ? <button className="btn">
              <span className="loading loading-spinner"></span>
              loading
            </button> : <button type='submit' className="btn btn-active btn-primary">Submit</button>}
       </form>
    </div>

    <p className='mt-5'>Already Have an Account? <Link to="/auth/login" className='text-sky-400'>Login</Link></p>
   </div> 
 
  )
}

export default Register