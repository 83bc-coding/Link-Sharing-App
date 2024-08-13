import { Box } from "@mui/material";
import { ReactNode, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  CardContextPreview,
  CardContextValuePreview,
} from "../../Context/preview/linksContextPreview";
import { getLinks } from "../qurey/getLinks";
import { getUserId } from "../qurey/getUserId";
import {
  UserContextPreview,
  UserContextValuePreview,
} from "../../Context/preview/userContextPreview";

type props = {
  children?: ReactNode;
};
export const Container = ({ children }: props) => {
  const { id } = useParams();
  const { addLinks } = useContext(
    CardContextPreview
  ) as CardContextValuePreview;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const { addUser } = useContext(UserContextPreview) as UserContextValuePreview;

  useEffect(() => {
    const getLink = async () => {
      setIsLoading(true);
      try {
        const user = await getUserId(id ?? "");
        addUser(user);
        console.log("im user preview", user);
        const links = await getLinks(id ?? "");
        addLinks(links);
        console.log("im preview get links", links);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    getLink();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "rgb(99 60 255 /1)",
        height: "250px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  );
};
