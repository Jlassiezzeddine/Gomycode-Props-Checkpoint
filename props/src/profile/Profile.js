import React from "react";

import "./Profile.scss";

const Profile = ({ user, children }) => {
  return (
    <React.Fragment>
      <div className="profile--card">
        <div className="profile--card--img">
          <img src={children} />
        </div>
        <div className="profile--card--content">
          <div className="profile--card--name">
            <h2>{user.fullName}</h2>
          </div>
          <div className="profile--card--profession">
            <h4>{user.profession}</h4>
          </div>
          <div className="profile--card--infos">
            <div className="profile--card--infos--articles">
              <span className="profile--card--infos-text">Articles</span>
              <span className="profile--card--infos-value">
                {user.articles}
              </span>
            </div>
            <div className="profile--card--infos--followers">
              <span className="profile--card--infos-text">Followers</span>
              <span className="profile--card--infos-value">
                {user.followers}
              </span>
            </div>
            <div className="profile--card--infos--rating">
              <span className="profile--card--infos-text">Rating</span>
              <span className="profile--card--infos-value">{user.rating}</span>
            </div>
          </div>
          <div className="profile--card--buttons">
            <button className="button--secondary">Chat</button>
            <button className="button--primary">Follow</button>
          </div>
        </div>
      </div>
      <div className="profile--description">
        <h4 className="profile--description--title">Bio</h4>
        <p className="profile--description--text">{user.bio}</p>
        <div className="profile--description--social">
          <div className="social--icon">
            <a href="https://www.facebook.com/ezz.dee.ne/" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>
          </div>
          <div className="social--icon">
            <a
              href="https://www.instagram.com/jlassi.ezzeddine/"
              target="_blank"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </div>
          <div className="social--icon">
            <a href="https://github.com/Jlassiezzeddine" target="_blank">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
