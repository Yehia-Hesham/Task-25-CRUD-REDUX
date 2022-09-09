import axios from "axios";
const token = "63163d7467c233a66ad265f6";
export default axios.create({
  baseURL: "https://dummyapi.io/data/v1/",
  headers: {
    'app-id': token
  },
});
