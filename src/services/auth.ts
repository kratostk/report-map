import axios from "axios";

// const axiosConfig = {
//   baseURL: "https://geotrackerbackend.kratostracking.com:5000",
// };

interface ILogin {
  username: string | null;
  password: string | null;
}
interface IUser {
  username: string;
  email: string;
  token: string;
  name: string;
}

/**
 *
 * @param {ILogin} credentials
 */
function login(credentials: ILogin): Promise<IUser> {
  return new Promise((resolve, reject) => {
    axios
      .post(
        `https://geotrackerbackend2.kratostracking.com:5001/login`,
        credentials
      )
      .then((response) => {
        // persist token in localStorage
        const { token, data } = response.data;
        localStorage.setItem("token", token.accessToken);
        resolve({ ...data, token: token.accessToken });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 *
 * @param {string | null} token
 */
function isAuth(token: string | null): Promise<IUser> {
  var config = {
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://geotrackerbackend2.kratostracking.com:5001/login/auth`,
        config
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export { login, isAuth };
