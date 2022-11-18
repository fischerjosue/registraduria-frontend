import axios from "axios";
import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

const ENDPOINT_PATH = "http://127.0.0.1:7777/";

export default {
  setUserLogged(userLogged) {
    Cookies.set("userLogged", userLogged);
  },

  getUserLogged() {
    return Cookies.get("userLogged");
  },

  register(seudonimo, correo, contrasena) {
    const user = { seudonimo, correo, contrasena };
    return axios.post(ENDPOINT_PATH + "login", user);
  },

  async login(correo, contrasena) {
    const user = { correo, contrasena };
    const result = await axios.post(ENDPOINT_PATH + "login", user);
    let dataLogIn = {
      token: result.data,
      user_id: result.data,
    };
    console.log(dataLogIn);
  },
};
