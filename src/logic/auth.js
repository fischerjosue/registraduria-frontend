import axios from "axios";
import Cookies from "js-cookie";

const ENDPOINT_PATH = "http://127.0.0.1:7777/";

export default {
  setUserLogged(dataLogIn) {
        Cookies.set("userLogged", dataLogIn);
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
    let dataLogIn = result.data.token;
    setUserLogged(dataLogIn);
    console.log(dataLogIn);
  },
};
