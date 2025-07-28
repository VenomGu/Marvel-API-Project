// services/api.ts
import axios from "axios";
import md5 from "md5"; // Este é o MD5 que você instalou via npm

const baseURL = `https://gateway.marvel.com/v1/public/`;

const publicKey = "0690d3702423a6e1f775777ef4004224"; // Sua Public Key
const privateKey = "d8d8dd44d0a10c8cbf58997f98026de29cc0f134"; // Sua Private Key

const api = axios.create({
    baseURL: baseURL,
});
console.log("API initialized with base URL:", baseURL);

api.interceptors.request.use(
    (config) => {
    const ts = Number(new Date()); // Geração do timestamp para cada requisição
    const hash = md5(ts + privateKey + publicKey); // Cálculo do hash com a lib MD5 do npm

    config.params = {
        ...config.params,
        ts,
        apikey: publicKey,
        hash,
    };
    return config;
    },
    (error) => {
    return Promise.reject(error);
    }
);

export default api;