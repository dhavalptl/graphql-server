import fetch from 'node-fetch';
import DataLoader from 'dataloader';

//const BASE_URL = "https://api.github.com/users/";

function fetchUser(login)  {
    //return fetch(BASE_URL + login).then(res => res.json());
    return {
        id: 1,
        login: "dhavalt",
        name: "Dhaval T",
        email: "a@a.com",
        company: "abc"
    };
};
function featchRepos(login){
    //return fetch(BASE_URL + login + "/repos").then(res => res.json());
    return [{
        name: "Repos1",
        description: "Repos1 description"
    },{
        name: "Repos2",
        description: "Repos2 description"
    }];
};

function createLoaders() {
  return {
    user: new DataLoader(logins => Promise.all(logins.map(fetchUser))),
    repos: new DataLoader(logins => Promise.all(logins.map(featchRepos)))
  };
};

const loaders = createLoaders();

export default loaders;