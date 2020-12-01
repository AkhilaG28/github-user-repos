import React from "react";
import { useSelector } from "react-redux";
import styles from "../Styles/search.module.css";
import { Link } from "react-router-dom";
import goB from "./goB.gif";

function Repo() {
  const { individualRepo } = useSelector((state) => state);

  const {
    owner,
    name,
    description,
    html_url,
    created_at,
    size,
    stargazers_count,
    watchers_count,
    language,
    forks_count,
  } = individualRepo;

  const takeToRepo = () => {
    window.location.href = html_url;
  };

  return (
    <>
      <Link to="/">
        <img width="150px" src={goB} alt="Go Back" />
      </Link>
      <div>
        <h3>{owner.login}</h3>
        <div className={styles.userDisplay}>
          <div>
            <img
              width="200px"
              src="https://techcrunch.com/wp-content/uploads/2010/07/github-logo.png?w=512"
              alt={name}
            />
            <button className={styles.profile} onClick={takeToRepo}>
              Repo Link
            </button>
          </div>
          <div>
            <div className={styles.repoDescp}>
              <h4>{name}</h4>
              <h6>{description}</h6>
              <h6>
                Size: <span>{size}</span>
              </h6>
              <h6>
                Created At: <span>{created_at}</span>
              </h6>
            </div>
            <div className={styles.additionalInfo}>
              <button className={styles.repos}>Language: {language}</button>
              <button className={styles.followers}>
                StarGazers: {stargazers_count}
              </button>
              <button className={styles.following}>
                Watchers: {watchers_count}
              </button>
              <button className={styles.repos}>Forks: {forks_count}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Repo;
