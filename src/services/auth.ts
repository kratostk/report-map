import axios from "axios";

interface ILogin {
  username: string | null;
  password: string | null;
}
interface IUser {
  username: string;
  email: string;
}
interface IToken {
  accessToken: string;
}

interface IAuth {
  isAuth: boolean;
  token: IToken;
  user: IUser;
}

/**
 *
 * @param {ILogin} credentials
 */
function login(credentials: ILogin): Promise<IUser> {
  return new Promise((resolve, reject) => {
    axios
      .post(`/login`, credentials)
      .then((response) => {
        // persist token in localStorage
        const { token, data } = response.data;
        localStorage.setItem("token", token.accessToken);
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export { login };
