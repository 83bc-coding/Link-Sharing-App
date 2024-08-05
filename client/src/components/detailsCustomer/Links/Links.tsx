 import { Container } from "../Profile Details/Container";
import Title from "../../../ui/Title";
import LinkCard from "./LinkCard";

const Links = () => {
  return (
    <Container>
      <Title
        title="Customize your links"
        description="Add/edit/remove links below and then share all your profiles with the world!"
      />
      <LinkCard/>
    </Container>
  );
};

export default Links;
