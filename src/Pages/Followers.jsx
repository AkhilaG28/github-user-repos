import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserFollowers, getUser } from "../Redux/actions";
import { useParams, useHistory, Link } from "react-router-dom";
import styles from "../Styles/search.module.css";
import goB from "./goB.gif";
import Error from "./Error";

function Followers() {
  const dispatch = useDispatch();

  const params = useParams();

  let name = params.owner; // gets owners name from url

  const { userFollowers, isError } = useSelector((state) => state); // gets followwers list and error from reducer

  // fetches followers of user as soon as the page reloads
  useEffect(() => {
    dispatch(getUserFollowers(name));
  }, [dispatch, name]);

  const history = useHistory();

  // fetches name of the user and reedirects to homepage
  const getRepos = (name) => {
    dispatch(getUser(name));
    history.push("/");
  };

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Link to="/">
        <img src={goB} alt="Go Back" />
      </Link>
      {/* Displays Followers Data */}
      <div className={styles.followersDisplay}>
        {userFollowers &&
          userFollowers.map((follower) => (
            <div
              key={follower.id}
              className={styles.getRepo}
              onClick={() => getRepos(follower.login)}
            >
              <img
                src={follower.avatar_url}
                className={styles.image}
                alt={follower.login}
              />
              <div>{follower.login}</div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Followers;
