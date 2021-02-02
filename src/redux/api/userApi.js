import Axios from "axios";

const defaultAxios = Axios.create({
  baseURL: "http://localhost:8000/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

//get user
export const getUser = async (name) => {
  try {
    const user = await defaultAxios.get(`user?name=${"test"}`, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    return user.data;
  } catch (error) {
    console.error(error);
  }
};
