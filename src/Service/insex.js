const getUserInfoAPI = (userName) => {
  return `https://api.github.com/users/${userName}`;
};

const APIServices = {
  getInfoUser: (userName) => {
    const url = getUserInfoAPI(`${userName}`);
    return fetch(url).then((response) => response.json());
  },
  listAllPublicRepos: (userName) => {
    const url = getUserInfoAPI(`${userName}/repos`);
    return fetch(url).then((response) => response.json());
  },
};

export default APIServices;
