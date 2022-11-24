import React, { useContext, useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { request } from "../api/request";
import { AuthContext } from "../context/AuthContext";
import { OtherUsers } from "./OtherUsers";

export const UsersDrawer = ({ show, handleClose }) => {
  const { user } = useContext(AuthContext);

  const [users, setUsers] = useState([]);
  const [isFriend, setIsFriend] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await request.get("/users");
      setUsers(data);
    };
    fetchUsers();
  }, []);

  // adding a friend
  const addFriend = async (userId) => {
    const { data } = await request.put("/add-friend", { userId });
  };

  //removing a friend
  const removeFriend = async (userId) => {
    const { data } = await request.put("/remove-friend", { userId });
    // console.log(data)
  };

  // const isLiked = likes.findIndex((a) => a._id === user._id);

  // const isFriend=users?.map(user=>user.friends).map(a=>a.includes('637cf2d179655dd5cf158ac6'));

  // 637cf2d179655dd5cf158ac6'
  const handleAddFriend = (userId, user) => {
    const friends = user.friends;
    const friend = friends.includes(user._id);
    console.log(friend)
    setIsFriend(friend);
    if (!friend) {
      addFriend(userId);
    } else {
      removeFriend(userId);
    }
  };

  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>People you may know</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {users?.map((user) => (
          <OtherUsers
            user={user}
            key={user._id}
            src={user.pic}
            username={user.username}
            handleAddFriend={handleAddFriend}
            userId={user._id}
            isFriend={isFriend}
          />
        ))}
      </Offcanvas.Body>
    </Offcanvas>
  );
};
