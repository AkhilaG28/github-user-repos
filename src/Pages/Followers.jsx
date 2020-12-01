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

  let name = params.owner;

  const { userFollowers, isError } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getUserFollowers(name));
  }, [dispatch, name]);

  const history = useHistory();

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
