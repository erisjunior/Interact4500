import axios from "axios";

const dogApi = axios.create({
  baseURL: "https://api.thedogapi.com/v1",
  headers: { "x-api-key": "e950ce28-f1da-4f38-b95f-52e2ec492dd7" }
});

export default dogApi;
