import React from "react";
import videoStyles from "./video.module.css";

const Videos = () => {
  return (
    <div className={videoStyles.container}>
      <div className={videoStyles.top__red}>
        <span>Videos From Our Youtube Page</span>
      </div>
      <div className={videoStyles.container__content}>
        <iframe
          // style={{  border: "none" }}
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          width="610"
          height="430"
          type="text/html"
          src="https://www.youtube.com/embed/UdXVAEYf-3A?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd1080&origin=https://youtubeembedcode.com"
        >
          <div>
            <small>
              <a href="https://youtubeembedcode.com/pl/">
                youtubeembedcode.com/pl/
              </a>
            </small>
          </div>
          <div>
            <small>
              <a href="https://www.unorules.org/uno-history/">
                Who invented uno
              </a>
            </small>
          </div>
          <div>
            <small>
              <a href="https://youtubeembedcode.com/es/">youtubeembedcode es</a>
            </small>
          </div>
          <div>
            <small>
              <a href="https://embedvimeovideo.com">Vimeo embed</a>
            </small>
          </div>
        </iframe>
        <iframe
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          width="610"
          height="430"
          type="text/html"
          src="https://www.youtube.com/embed/k1YXb_Fk4l0?autoplay=0&fs=0&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&vq=hd1080&origin=https://youtubeembedcode.com"
        >
          <div>
            <small>
              <a href="https://youtubeembedcode.com/pl/">youtubeembedcode pl</a>
            </small>
          </div>
          <div>
            <small>
              <a href="https://www.unorules.org/uno-skip-card/">
                Uno skip card
              </a>
            </small>
          </div>
          <div>
            <small>
              <a href="https://youtubeembedcode.com/es/">
                youtubeembedcode.com/es/
              </a>
            </small>
          </div>
          <div>
            <small>
              <a href="https://googlemapsgenerator.com">Google maps embed</a>
            </small>
          </div>
        </iframe>
      </div>
    </div>
  );
};

export default Videos;
