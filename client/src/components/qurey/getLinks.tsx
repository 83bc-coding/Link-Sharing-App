import axios from "axios";

export const getLinks = async (userId: string) => {
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/links/all-links/${userId}`
    );
    console.log(data, "im api links");
    const {links} = data
    return links;
  } catch (error) {
    console.log(error);
    throw error;
  }
};