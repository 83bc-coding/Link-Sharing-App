import axios from "axios";

export const updateLinks = async (userId: string, Links: any) => {
  console.log(userId, "in updateLinks");

  axios
    .post(`http://localhost:5000/api/links/links/`, {
      userId,
      Links,
    })
    .then( async(res) => {
      const { data } = res;
     
      console.log(data, "in updateLinks data");
      return  data
    });
};

//   try {
//     const { data } = await axios.get(`http://localhost:5000/api/links/links/`, {
//       params: { Links: cards, userId: userId },
//     });
//     console.log(data, "im apin links ");
//     addCard(data?.links);
//   } catch (error) {
//     console.log(error);
//   }
