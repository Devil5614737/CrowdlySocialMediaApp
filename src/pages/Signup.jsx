import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {useCloudinary} from '../hooks/useCloudinary';
import {toast,Toaster} from 'react-hot-toast';
import {request} from '../api/request';

function Signup() {
const[username,setUsername]=useState("")
const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const[file,setFile]=useState();
const {url}=useCloudinary(file)


const handleSignup=async(e)=>{
    e.preventDefault()
    if(!username || !email || !password ||!url){
        toast.error('All the fields are necessary')
    }

const {data}=await request.post('/signup',{username,email,password,pic:url})
if(data){
    toast.success('Signup successfull')
}
}

  return (
    <>
    <div className='login relative'>
<div className="card p-2 py-2" style={{width:'28rem'}}>
    <div className="card-body">
        <div className="text-center">
        <h1 className='mb-3'>Welcome To <span style={{color:'#902bff',textDecoration:"underline"}}>Crowdly</span></h1>
       
        </div>
        <form onSubmit={handleSignup} className='form mt-4'>
            <div className="input-group-lg">
            <label htmlFor="username" className='form-label'>Username</label>
            <input id='username' type="text" className='form-control'
            value={username}
            onChange={e=>setUsername(e.target.value)}
            />
            </div>
            <div className="input-group-lg mt-3">
            <label htmlFor="email" className='form-label'>Email</label>
            <input id='email' type="email" className='form-control'
            value={email}
            onChange={e=>setEmail(e.target.value)}
            />
            </div>
            <div className="mt-3 input-group-lg">
            <label htmlFor="password" className='form-label'>Password</label>
            <input id='password' type="password" className='form-control'
            value={password}
            onChange={e=>setPassword(e.target.value)}
            />
        </div>
            <div className="mt-3 input-group-lg">
            <label htmlFor="upload-dp" className='form-label'>Select Profile Picture</label>
            <input id='upload-dp' type="file" className='form-control'
            onChange={e=>setFile(e.target.files)}
            />
            </div>
            <button type='submit' className='btn btn-dark mt-4 w-100 btn-lg'>Signup</button>
            <p className='card-text mt-4 text-center'>Have an account? <Link to="/" className='card-link'>Sign In</Link></p>
        </form>
    </div>
</div>

    </div>
    <Toaster
    position='top-right'
    toastOptions={
        {
            duration:1500,
            style:{
                fontSize:14
            }
        }
    }
    />
    </>
  )
}

export default Signup;