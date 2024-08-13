import axios from "axios";
import { UserType } from "../../types/UserType";

export const updateUser = async (user: UserType) => {
  console.log(user, "in updateUser");

  const response = await axios.post(`http://localhost:5000/api/users/update`, {
    user,
  });

  const { data } = response;

  console.log(data, "in updateUser data");
  return data;
};
