const getUserInfoAPI = (userName) => {
  return `https://api.github.com/users/${userName}`;
};

const getReadMeAPI = (owner, repo) => {
  return `https://api.github.com//repos/${owner}/${repo}/readme`;
};

const APIServices = {
  getListAllPublicRepos: (userName) => {
    return fetch(getUserInfoAPI(`${userName}/repos`)).then((response) =>
      response.json()
    );
  },

  getInfoUser: (userName) => {
    return fetch(`https://api.github.com/users/${userName}`).then(
      (response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          return response.status;
        }
      }
    );
  },

  getReadMeUser: (owner, repo) => {
    return fetch(getReadMeAPI(owner, repo)).then((response) => response.json());
  },
};

export default APIServices;
