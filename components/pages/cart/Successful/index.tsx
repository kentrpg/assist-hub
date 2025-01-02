import Breadcrumb from "@/components/ui/Breadcrumb";
import { Container1164 as Container } from "@/styles/container";
import { Title } from "../styled";
import { Context, SuccessIcon, Description, Mark, Group, SecondaryButton, PrimaryButton } from "./styled";

const Successful = () => {
  return (
    <Container>
      <Breadcrumb />
      <Context>
        <SuccessIcon />
        <Title>付款成功</Title>
        <Description>為了您的訂單安全，店內取貨時需出示<Mark>驗證碼</Mark>以完成核對</Description>
        <Group>
          <SecondaryButton>繼續逛逛</SecondaryButton>
          <PrimaryButton>查看訂單</PrimaryButton>
        </Group>
      </Context>
    </Container>
  );
};

export default Successful;
