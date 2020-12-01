import React from "react";
import styles from "../Styles/search.module.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function UserProfile() {
  const { userData } = useSelector((state) => state);

  const {
    avatar_url,
    login,
    html_url,
    public_repos,
    followers,
    following,
    created_at,
    updated_at,
  } = userData;

  const handleRedirect = () => {
    window.location.href = html_url;
  };

  const history = useHistory();
  const getFollowersList = () => {
    history.push(`/followers/${login}`);
  };

  return (
    <div className={styles.userDisplay}>
      <div className={styles.imageDisplay}>
        <img src={avatar_url} alt={login} />
        <button className={styles.profile} onClick={handleRedirect}>
          View Profile
        </button>
      </div>
      <div>
        <div className={styles.additionalInfo}>
          <button className={styles.repos}>Public Repos: {public_repos}</button>
          <button className={styles.followers} onClick={getFollowersList}>
            Followers: {followers}
          </button>
          <button className={styles.following}>Following: {following}</button>
        </div>
        <div className={styles.createdData}>
          <div>Name: {login}</div>
          <div>Created At: {created_at}</div>
          <div>Updated At: {updated_at}</div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
