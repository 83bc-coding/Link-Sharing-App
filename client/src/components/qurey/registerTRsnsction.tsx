import axios from "axios";

export const registerTransction = (data: any) => {
  axios
    .post("http://localhost:5000/api/users/register", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      const data = res;
      console.log(data);
    })
    .catch((erroe) => {
      console.log(erroe);
    });
};
