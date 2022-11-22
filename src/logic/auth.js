import axios from "axios";
import Cookies from "js-cookie";

const ENDPOINT_PATH = "http://127.0.0.1:7777/";

export default {

  getUserLogged() {
    return Cookies.get("userLogged");
  },

  async singup(seudonimo, correo, contrasena) {
    const user = { seudonimo, correo, contrasena };
    const result = axios.post(ENDPOINT_PATH + "singup", user);
    Cookies.set("userLogged", result.data.token, { expires: 7 });
    console.log(result.data);
  },

  async login(correo, contrasena) {
    const user = { correo, contrasena };
    const result = await axios.post(ENDPOINT_PATH + "login", user);
    Cookies.set("userLogged", result.data.token, { expires: 7 });
    console.log(result.data);
  },
};
