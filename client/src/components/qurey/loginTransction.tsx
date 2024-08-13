import axios from "axios";
 
export const loginTransaction = async (dataa: any) => {

  try {

    const {data} = await axios.post(
      "http://localhost:5000/api/users/login",
      dataa,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
 return data
  } catch (error) {
    console.log(error);
  }
};
