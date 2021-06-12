import React, { useState } from "react";

const Helper = () => {
  const [values, setValues] = useState({
    likes: 100,
    dislikes: 25,
    setLike: false,
    setDislike: false,
  });

  const [likes, setLikes] = useState(100);
  const [dislikes, setDisLike] = useState(25);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const increment = () => {
    if (liked == false) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  const decrement = () => {
    if (disliked == false) {
      setDisLike(dislikes + 1);
      setDisliked(true);
    } else {
      setDisLike(dislikes - 1);
      setDisliked(false);
    }
  };

  return (
    <div>
      <div>
        <h2>Like/Dislike</h2>

        <button className="like-button">
          <span className="likes-counter">{`Like | ${likes}`}</span>
        </button>

        <button className="dislike-button">
          <span className="dislikes-counter">{`Dislike | ${dislikes}`}</span>
        </button>
        <br />
        <button className={liked ? "liked" : ""} onClick={increment}>
          like
        </button>
        <button className={disliked ? "disliked" : ""} onClick={decrement}>
          dislike
        </button>
      </div>
      <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
    </div>
  );
};

export default Helper;
