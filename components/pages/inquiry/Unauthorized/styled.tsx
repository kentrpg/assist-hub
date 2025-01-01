import { buttonSizes, AccentButton } from "@/components/ui/buttons";
import { Mobile } from "@/styles/container";
import styled from "styled-components";

export const InquiryStep = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 30px 0;

  @media (${Mobile}) {
    padding: 60px 0;
  }
`;

export const Button = styled(AccentButton)`
  ${buttonSizes.xlarge};
`;
