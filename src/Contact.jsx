import React, { useState } from "react";
import "./Styles.css";

function Contact(props) {
  const [popup, setPopup] = useState(true);

  const handlePop = () => {
    setPopup(!popup);
  };

  return (
    <React.Fragment>
      {popup ? (
        <div className="chat-logo">
          <span className="open-button" onClick={handlePop}>
            <i className="fa fa-comment" aria-hidden="true"></i>
          </span>
        </div>
      ) : (
        <div className="chat-popup">
          <form action="/action_page.php" class="form-container">
            <h1>Chat</h1>
            
            <label for="msg">
              <b>Message</b>
            </label>
            <textarea
              placeholder="Type message.."
              name="msg"
              required
            ></textarea>

            <button type="submit" class="btn">
              Send
            </button>
            <button type="button" class="btn cancel" onClick={handlePop}>
              Close
            </button>
          </form>
        </div>
      )}
    </React.Fragment>
  );
}

export default Contact;
