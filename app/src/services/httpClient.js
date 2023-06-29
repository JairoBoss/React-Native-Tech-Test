import axios from "axios";
const baseURL = "https://api.datos.gob.mx/v2/";

const httpClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("Se produjo un error en la solicitud:", error);

    return Promise.reject({
      status: 500,
      message: "Error de conexión con el servidor.",
    });
  }
);

export default httpClient;
