import {
  ChatBubbleOvalLeftIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid";
import React, { useContext, useState } from "react";
import { request } from "../../api/request";
import { PostContext } from "../../context/PostContext";
import { AuthContext } from "../../context/AuthContext";

export const CardBody = ({ postedBy, comments, caption, likes, postId }) => {
  const { user } = useContext(AuthContext);
  const { setRefetch } = useContext(PostContext);
  const [commentText, setCommentText] = useState("");

  const handleComment = async (e) => {
    e.preventDefault();
    setRefetch(true);
    await request.put("/comment", { text: commentText, postId });
    setCommentText("");
  };

  const like = async () => {
    setRefetch(true);
    await request.put("/like", { postId });
  };
  const unLike = async () => {
    setRefetch(true);
    await request.put("/unlike", { postId });
  };

  //Checking the post is liked or not
  const isLiked = likes.findIndex((a) => a._id === user._id);

  const handleLike = () => {
    if (isLiked === -1) {
      like();
    } else {
      unLike();
    }
  };

  return (
    <div className="card-body ">
      <div className="d-flex gap-2 align-items-center">
        {isLiked === -1 ? (
          <HeartIcon
            onClick={handleLike}
            style={{ width: 25, height: 25, cursor: "pointer" }}
          />
        ) : (
          <HeartIconFilled
            color="red"
            onClick={handleLike}
            style={{ width: 25, height: 25, cursor: "pointer" }}
          />
        )}
        <ChatBubbleOvalLeftIcon
          style={{ width: 25, height: 25, cursor: "pointer" }}
        />
      </div>
      <p className="card-subtitle mt-2" style={{ fontSize: 14, color: "gray" }}>
        {likes?.length} Likes
      </p>
      <p className="mt-2 card-text d-flex gap-2" style={{ fontWeight: 500 }}>
        {postedBy.username} <span style={{ fontWeight: 400 }}>{caption}</span>
      </p>
      <p className="card-subtitle mb-1" style={{ fontSize: 14, color: "gray" }}>
        {comments?.length} Comments
      </p>
      <div className="comments">
        {comments?.map((comment) => (
          <p
            key={comment._id}
            className=" card-text d-flex gap-2"
            style={{ fontWeight: 500 }}
          >
            {comment.postedBy.username}{" "}
            <span style={{ fontWeight: 400 }}>{comment.text}</span>
          </p>
        ))}
      </div>
      <form className="d-flex align-items-center gap-2">
        <input
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          type="text"
          className="
        mt-2 form-control"
        />
        <button onClick={handleComment} className="btn btn-dark btn-sm ">
          <PaperAirplaneIcon
            style={{ width: 25, height: 25, cursor: "pointer" }}
          />
        </button>
      </form>
    </div>
  );
};
