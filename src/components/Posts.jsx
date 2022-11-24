import React, { useContext, useEffect, useState } from "react";
import { Card } from "./Card/index";
import {request} from '../api/request';
import {PostContext} from '../context/PostContext';

export const Posts = () => {
const {refetch,setRefetch}=useContext(PostContext)
const[posts,setPosts]=useState([]);

  useEffect(()=>{
const fetchPosts=async()=>{
  const {data}=await request.get('/allpost')
  setPosts(data.reverse())
}
fetchPosts();
return ()=>setRefetch(false)
  },[refetch])

  return (
    <section className="d-grid">
      {posts?.map(post=>
      <Card key={post._id} post={post}/>
        )}
    </section>
  );
};
