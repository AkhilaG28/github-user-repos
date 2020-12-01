import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER_REPOS_REQUEST,
  GET_USER_REPOS_SUCCESS,
  GET_USER_REPOS_FAILURE,
  GET_USER_FOLLOWERS_REQUEST,
  GET_USER_FOLLOWERS_SUCCESS,
  GET_USER_FOLLOWERS_FAILURE,
  GET_INDIVIDUAL_REPO_REQUEST,
  GET_INDIVIDUAL_REPO_SUCCESS,
  GET_INDIVIDUAL_REPO_FAILURE,
} from "./actionTypes";

import axios from "axios";

// get user details from github

export const getUserRequest = () => ({
  type: GET_USER_REQUEST,
});

export const getUserSuccess = (payload) => ({
  type: GET_USER_SUCCESS,
  payload,
});

export const getUserFailure = (payload) => ({
  type: GET_USER_FAILURE,
  payload,
});

export const getUser = (payload) => (dispatch) => {
  dispatch(getUserRequest());
  axios
    .get(`https://api.github.com/users/${payload}`)
    .then((res) => {
      console.log(res.data);
      dispatch(getUserSuccess(res.data));
      dispatch(getUserRepos(payload));
    })
    .catch((err) => dispatch(getUserFailure(err)));
};

// get user repos

export const getUserRepoRequest = () => ({
  type: GET_USER_REPOS_REQUEST,
});

export const getUserRepoSuccess = (payload) => ({
  type: GET_USER_REPOS_SUCCESS,
  payload,
});

export const getUserRepoFailure = (payload) => ({
  type: GET_USER_REPOS_FAILURE,
  payload,
});

export const getUserRepos = (payload) => (dispatch) => {
  dispatch(getUserRepoRequest());
  axios
    .get(`https://api.github.com/users/${payload}/repos`)
    .then((res) => {
      console.log(res.data);
      dispatch(getUserRepoSuccess(res.data));
    })
    .catch((err) => dispatch(getUserRepoFailure(err)));
};

// get users followers

export const getUserFollowersRequest = () => ({
  type: GET_USER_FOLLOWERS_REQUEST,
});

export const getUserFollowersSuccess = (payload) => ({
  type: GET_USER_FOLLOWERS_SUCCESS,
  payload,
});

export const getUserFollowersFailure = (payload) => ({
  type: GET_USER_FOLLOWERS_FAILURE,
  payload,
});

export const getUserFollowers = (payload) => (dispatch) => {
  dispatch(getUserFollowersRequest());
  axios
    .get(`https://api.github.com/users/${payload}/followers`)
    .then((res) => {
      console.log(res.data);
      dispatch(getUserFollowersSuccess(res.data));
    })
    .catch((err) => dispatch(getUserFollowersFailure(err)));
};

// get Individual Repos

export const getIndividualRepoRequest = () => ({
  type: GET_INDIVIDUAL_REPO_REQUEST,
});

export const getIndividualRepoSuccess = (payload) => ({
  type: GET_INDIVIDUAL_REPO_SUCCESS,
  payload,
});

export const getIndividualRepoFailure = (payload) => ({
  type: GET_INDIVIDUAL_REPO_FAILURE,
  payload,
});

export const getIndividualRepo = (payload) => (dispatch) => {
  dispatch(getIndividualRepoRequest());
  axios
    .get(`https://api.github.com/repos/${payload.username}/${payload.repoName}`)
    .then((res) => {
      console.log(res.data);
      dispatch(getIndividualRepoSuccess(res.data));
    })
    .catch((err) => dispatch(getIndividualRepoFailure(err)));
};
