import { Container } from "./Container";
import Title from "../../../ui/Title";
import ListLinks from "./ListLinks";
import { HandelSave } from "../HandelSave";
const Links = () => {
 
  return (
    <>
      <Container>
        <Title
          title="Customize your links"
          description="Add/edit/remove links below and then share all your profiles with the world!"
        />
        <ListLinks />
        <HandelSave />
      </Container>
    </>
  );
};

export default Links;
