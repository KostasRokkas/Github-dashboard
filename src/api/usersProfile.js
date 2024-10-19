import axios from "axios";

const BASE_URL = "https://api.github.com/users";

export const fetchUserProfile = async (username) => {
  const response = await axios.get(`${BASE_URL}/${username}`, {});
  return response.data;
};

export const fetchUserRepos = async (username) => {
  const response = await axios.get(`${BASE_URL}/${username}/repos`, {});
  return response.data;
};

export const fetchUserFollowers = async (username) => {
  const response = await axios.get(`${BASE_URL}/${username}/followers`, {});
  return response.data;
};
