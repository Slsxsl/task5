import React, { useState } from "react";
import "./post.css";
import Container from "../container/contianer";
import like from "../../assets/like.png";
import comment from "../../assets/comment.png";
import ex from "../../assets/ex.png";

const postsData = [
  {
    id: 1,
    clientName: "Client One",
    timeAgo: "posted 2 hours ago",
    status: "Available",
    title: "Looking for full-stack developer with experience +2 years",
    description:
      "to build a responsive, user-focused web application. Must be skilled in both front-end and back-end development...",
    duration: "4 Months",
    pricing: "Hourly $50",
    image: ex,
    likes: 0,
    comments: [],
    hasLiked: false,
  },
  {
    id: 2,
    clientName: "Client Two",
    timeAgo: "posted 1 day ago",
    status: "Unavailable",
    title: "Looking for UI/UX Designer",
    description:
      "We are looking for a creative UI/UX designer to join our team for a new mobile app project. Must have experience in designing mobile interfaces...",
    duration: "2 Months",
    pricing: "Project-based $5000",
    image: " ",
    likes: 0,
    comments: [],
    hasLiked: false,
  },
];

const Post = () => {
  const [posts, setPosts] = useState(postsData);
  const [seeMore, setSeeMore] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [showCommentInput, setShowCommentInput] = useState(false);

  const toggleLike = (id) => {
    const updatedPosts = posts.map((post) =>
      post.id === id
        ? post.hasLiked
          ? { ...post, likes: post.likes - 1, hasLiked: false }
          : { ...post, likes: post.likes + 1, hasLiked: true }
        : post
    );
    setPosts(updatedPosts);
  };

  const addComment = (id, commentText) => {
    const updatedPosts = posts.map((post) =>
      post.id === id
        ? { ...post, comments: [...post.comments, commentText] }
        : post
    );
    setPosts(updatedPosts);
  };

  const toggleDetails = () => {
    setSeeMore(!seeMore);
  };

  return (
    <div className="posts">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <Container>
            <div className="post-head">
              <img src=" " alt="" className="profile" />
              <div className="text">
                <h5>{post.clientName}</h5>
                <p>{post.timeAgo}</p>
              </div>
              <div className="status">{post.status}</div>
            </div>

            <div className="post-body">
              <h5>{post.title}</h5>
              <p>
                {post.description}
                {seeMore ? (
                  <span onClick={toggleDetails}> see less</span>
                ) : (
                  <span onClick={toggleDetails}> see more</span>
                )}
              </p>

              {seeMore && (
                <div className="more-details">
                  <h5>Duration of project</h5>
                  <p>{post.duration}</p>
                  <h5>Pricing</h5>
                  <p>{post.pricing}</p>
                </div>
              )}
              <img src={post.image} alt="" />
            </div>

            <div className="post-footer">
              <div
                className="like"
                onClick={() => toggleLike(post.id)}
                style={{
                  cursor: "pointer",
                  opacity: post.hasLiked ? 0.5 : 1,
                 
                }}
              >
                <img src={like} alt="" />
                <p>Like ({post.likes})</p>
              </div>
              <div
                className="comment"
                onClick={() => setShowCommentInput(!showCommentInput)}
              >
                <img src={comment} alt="" />
                <p>Comment ({post.comments.length})</p>
              </div>
            </div>

            {showCommentInput && (
              <div className="comment-input">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="Write a comment..."
                />
                <button
                  onClick={() => {
                    if (newComment.trim() !== "") {
                      addComment(post.id, newComment);
                      setNewComment("");
                    }
                  }}
                >
                  Post
                </button>
              </div>
            )}

            {post.comments.length > 0 && (
              <div className="comments-list">
                <h5>Comments:</h5>
                <ul>
                  {post.comments.map((comment, index) => (
                    <li key={index}>{comment}</li>
                  ))}
                </ul>
              </div>
            )}
          </Container>
        </div>
      ))}
    </div>
  );
};

export default Post;
