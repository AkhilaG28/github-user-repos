import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../Redux/actions";

import UserProfile from "./UserProfile";
import UserRepos from "./UserRepos";
import styles from "../Styles/search.module.css";

function SearchComponent() {
  const [username, setUsername] = useState("");
  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const dispatch = useDispatch();

  const getUserDetails = () => {
    dispatch(getUser(username));
  };

  return (
    <div>
      <h1 className={styles.heading}>Github Search User</h1>
      <div className={styles.inputSearch}>
        <input
          type="text"
          placeholder="Search User"
          onChange={handleChange}
          value={username}
        />
        <img
          width="20px"
          src="https://www.flaticon.com/svg/static/icons/svg/46/46389.svg"
          alt="Search Icon"
          onClick={getUserDetails}
        />
      </div>
      {/* display user data */}
      <UserProfile />
      {/* display user repos */}
      <UserRepos />
    </div>
  );
}

export default SearchComponent;
