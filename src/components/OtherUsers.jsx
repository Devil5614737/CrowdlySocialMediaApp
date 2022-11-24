import React from 'react'

export const OtherUsers = ({src,username,handleAddFriend,userId,user,isFriend}) => {
  return (
    <div className="d-flex  align-items-center gap-3 mb-3">
    <img style={{width:40,height:40,objectFit:'cover',borderRadius:'100%'}} src={src} alt={username} />
    <p style={{fontSize:18,margin:0}}>{username}</p>
    <button className="btn btn-dark btn-sm" onClick={()=>handleAddFriend(userId,user)}>{isFriend?"Remove Friend":"Add Friend"}</button>
  </div>
  )
}
