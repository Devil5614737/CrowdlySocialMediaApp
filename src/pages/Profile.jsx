import { ChatBubbleOvalLeftIcon, HeartIcon,TrashIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { UserInfo } from "../components/UserInfo";
import {request} from '../api/request'




function Profile() {
const[posts,setPosts]=useState([]);
const[currentUser,setCurrentUser]=useState()



useEffect(()=>{
  const fetchPost=async()=>{
const {data}=await request.get('/my-post')
setPosts(data)
  }
  fetchPost()
},[])

useEffect(()=>{
  const fetchUser=async()=>{
const {data}=await request.get('/my-profile')
setCurrentUser(data)
  }
  fetchUser()
},[])



  return (
    <>
      <Navbar />
      <main className="container mt-3">
        <UserInfo user={currentUser}/>
        <section className="mt-4">
          <h4>Posts <span className="badge text-bg-dark">{posts?.length}</span></h4>
          <div className="mt-4">
  <div className="row">
    {posts?.map((post)=>
    <div key={post._id} className="profile-post col-sm-4 mb-3 " style={{paddingRight:0}}>
        <img
        src={post.image}
        style={{width:'100%',borderRadius:4,height:300}}
        alt='user post'
        />
        <div className="profile-icons d-flex gap-4 align-items-center">
<div className="d-flex  gap-2 text-white">
<HeartIcon style={{width:30,height:30,color:'white'}}/>
<p style={{fontSize:18}}>{post?.likes.length}</p>
</div>
        <div className="d-flex gap-1 text-white">
        <ChatBubbleOvalLeftIcon style={{width:30,height:30,color:'white'}}/>
        <p style={{fontSize:18}}>{post?.comments.length}</p>
        </div>
        </div>
    </div>
        )}
   
  </div>
</div>
        </section>
      </main>
    </>
  );
}

export default Profile;
