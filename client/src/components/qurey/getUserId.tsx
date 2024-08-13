import axios from "axios";

export const getUserId = async (id: string) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/users/user/${id}`)
    return data;
  } catch (error) {
    console.log(error);
  }
};
