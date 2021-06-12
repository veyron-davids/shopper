import React, { useState } from "react";

const Helper = () => {
  const [values, setValues] = useState({
    likes: 100,
    dislikes: 25,
    setLike: false,
    setDislike: false,
  });

  const likecounter = () => {
    if (values.setLike == false) {
      setValues({ likes: likes + 1 });
      setValues({ setLike: true });
    } else {
      setValues(likes - 1);
      setValues({ setLike: false });
    }
  };

  const dislikecounter = () => {
    if (values.setDislike == false) {
      setValues({ dislikes: dislikes + 1 });
      setValues({ setDislike: true });
    } else {
      setValues(dislikes - 1);
      setValues({ setDislike: false });
    }
  };

  return (
    <div>
      <div>
        <h2>Like/Dislike</h2>

        <button className="like-button">
          <span className="likes-counter">{values.likes}</span>
        </button>

        <button className="dislike-button">
          <span className="dislikes-counter">{values.dislikes}</span>
        </button>
        <br />
        <button className={setLike ? "liked" : ""} onClick={likecounter}>
          like
        </button>
        <button
          className={setDislike ? "disliked" : ""}
          onClick={dislikecounter}
        >
          disliked
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
