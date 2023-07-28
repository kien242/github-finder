const getUserInfoAPI = (userName) => {
  return `https://api.github.com/users/${userName}`;
};

const saveUserAPI = () => {
  return `https://64bdfe1c2320b36433c7f28d.mockapi.io/api/v1/githubUser`;
};

const APIServices = {
  getInfoUser: (userName) => {
    const url = getUserInfoAPI(`${userName}`);
    return fetch(url).then((response) => response.json());
  },
  getListAllPublicRepos: (userName) => {
    const url = getUserInfoAPI(`${userName}/repos`);
    return fetch(url).then((response) => response.json());
  },
  getSaveUser: () => {
    return fetch(saveUserAPI).then((response) => response.json());
  },
  postSaveUser: (userName) => {
    fetch(saveUserAPI, {
      method: "POST",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify({ userName: { userName } }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((task) => {
        // do something with the new task
      })
      .catch((error) => {
        // handle error
      });
  },
  deleteUser: (userName) => {
    fetch(saveUserAPI, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      // Send your data in the request body as JSON
      body: JSON.stringify({ userName: { userName } }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        // handle error
      })
      .then((task) => {
        // Do something with deleted task
      })
      .catch((error) => {
        // handle error
      });
  },
};

export default APIServices;
