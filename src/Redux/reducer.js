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

import { loadData, saveData } from "../localStorage";

export const initialState = {
  isLoading: false,
  isError: false,
  errMsg: "",
  userData: loadData("githubUser") || {},
  userRepos: loadData("githubUserRepos") || [],
  userFollowers: loadData("githubUserFollowers") || [],
  individualRepo: loadData("githubRepo") || {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errMsg: "",
      };

    case GET_USER_SUCCESS:
      saveData("githubUser", action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        errMsg: "",
        userData: action.payload,
      };

    case GET_USER_FAILURE:
      saveData("githubUser", {});
      return {
        ...state,
        isLoading: false,
        isError: true,
        errMsg: action.payload,
        userData: {},
      };

    case GET_USER_REPOS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errMsg: "",
      };

    case GET_USER_REPOS_SUCCESS:
      saveData("githubUserRepos", action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        errMsg: "",
        userRepos: action.payload,
      };

    case GET_USER_REPOS_FAILURE:
      saveData("githubUserRepos", []);
      return {
        ...state,
        isLoading: false,
        isError: true,
        errMsg: action.payload,
        userRepos: [],
      };

    case GET_USER_FOLLOWERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errMsg: "",
      };

    case GET_USER_FOLLOWERS_SUCCESS:
      saveData("githubUserFollowers", action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        errMsg: "",
        userFollowers: action.payload,
      };

    case GET_USER_FOLLOWERS_FAILURE:
      saveData("githubUserFollowers", []);
      return {
        ...state,
        isLoading: false,
        isError: true,
        errMsg: action.payload,
        userFollowers: [],
      };

    case GET_INDIVIDUAL_REPO_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errMsg: "",
      };

    case GET_INDIVIDUAL_REPO_SUCCESS:
      saveData("githubRepo", action.payload);
      return {
        ...state,
        isLoading: false,
        isError: false,
        errMsg: "",
        individualRepo: action.payload,
      };

    case GET_INDIVIDUAL_REPO_FAILURE:
      saveData("githubRepo", {});
      return {
        ...state,
        isLoading: false,
        isError: true,
        errMsg: action.payload,
        individualRepo: {},
      };

    default:
      return state;
  }
};
