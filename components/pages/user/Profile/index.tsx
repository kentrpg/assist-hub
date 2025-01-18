import Form from "./Form";
import { FormContainer, Titile } from "./styled";

const Profile: React.FC = () => {
  return (
    <FormContainer>
      <Titile>基本資料</Titile>
      <Form />
    </FormContainer>
  );
};

export default Profile;
