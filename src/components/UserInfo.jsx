import React from 'react'

const user_pic =
  "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FydG9vbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";


export const UserInfo = ({user}) => {
  return (
    <section className=''>
    <div className="d-flex gap-4 align-items-center">
        <img style={{width:160,height:160,borderRadius:4}} src={user?.pic} alt="The User" />
        <div className="">
            <p>{user?.username}</p>
            <p>Friends: {user?.friends.length}</p>
            <p>Email:{user?.email}</p>
            <button className='btn btn-secondary btn-sm'>Edit Profile</button>
        </div>
    </div>
</section>
  )
}


