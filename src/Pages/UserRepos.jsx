import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getIndividualRepo } from "../Redux/actions";
import styles from "../Styles/search.module.css";

function UserRepos() {
  const { userData, userRepos } = useSelector((state) => state);

  const dispatch = useDispatch();

  const history = useHistory();

  const goToRepo = (name) => {
    let payload = {
      username: userData.login,
      repoName: name,
    };
    dispatch(getIndividualRepo(payload));
    history.push(`/repo/${name}`);
  };

  return (
    <div>
      <h1>Repositories ({userRepos.length})</h1>
      {userRepos &&
        userRepos.map((repo) => (
          <div
            className={styles.repoDisplay}
            key={repo.id}
            onClick={() => goToRepo(repo.name)}
          >
            <img
              src="https://techcrunch.com/wp-content/uploads/2010/07/github-logo.png?w=512"
              alt={repo.name}
            />
            <div className={styles.repoDescription}>
              <h3>{repo.name}</h3>
              <h6>
                Description: <span>{repo.description}</span>
              </h6>
              <h6>
                Created At: <span>{repo.created_at}</span>
              </h6>
            </div>
          </div>
        ))}
    </div>
  );
}

export default UserRepos;
