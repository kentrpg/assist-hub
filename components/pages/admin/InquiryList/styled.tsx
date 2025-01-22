import { buttonSizes, SecondaryButton } from "@/components/ui/buttons/Layout";
import {
  ButtonRadius,
  ButtonRadiusSmall,
  CardRadius,
  InputRadius,
} from "@/styles/borderRadius";
import { Mobile, Tablet } from "@/styles/container";
import {
  ButtonHoverTransition,
  FloatingLabelShadow,
  InputFieldTransition,
} from "@/styles/effect";
import { H2, H4, H6 } from "@/styles/typography";
import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;
  /* max-width: 1200px;
  margin: 0 auto; */
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  ${H2};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const SubTitle = styled.h2`
  ${H4};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const SectionWrapper = styled.div`
  padding: 21px 0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const BaseButton = styled.button`
  ${ButtonRadiusSmall};
  ${ButtonHoverTransition};
  padding: 8px 16px;
`;

export const SaveButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
`;

export const InfoList = styled.div`
  display: flex;
  gap: 16px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoLabel = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 700;
  font-size: 16px;
  margin-right: 16px;
`;

export const InfoValue = styled.span`
  font-size: 16px;
  border-left: 2px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 12px 0 12px 16px;
`;

export const Suggest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  ${CardRadius};
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  padding: 20px 24px;
`;

export const Additional = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const SuggestInput = styled.input`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  outline: none;
  ${InputFieldTransition};
  padding: 12px 16px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    ${FloatingLabelShadow};
  }
`;

export const SelectedSection = styled.div`
  margin-bottom: 24px;
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background-color: ${({ theme }) => theme.colors.secondaryBg};
  padding: 16px;

  @media ${Mobile} {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 24px;
    column-gap: 16px;
    padding: 24px;
  }
  @media ${Tablet} {
    flex-wrap: nowrap;
  }
`;

export const ImageWrapper = styled.div`
  flex: 0 0 auto;
  max-width: inherit;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  row-gap: 10px;
  @media ${Tablet} {
    flex: 0 0 19.22%; /* 204px / 1061px */
    max-width: 19.22%;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 100px;
  height: auto;
  @media ${Mobile} {
    max-width: 130px;
  }
  @media ${Tablet} {
    max-width: 150px;
  }
`;

export const Info = styled.div`
  flex: 0 0 auto;
  max-width: inherit;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  @media ${Mobile} {
    width: calc((100% - 1 * 16px) / 2);
    justify-content: start;
  }
  @media ${Tablet} {
    flex: 0 0 41.45%;
    max-width: 41.45%;
    justify-content: space-between;
  }
`;

export const Name = styled.h3`
  ${H6};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin: 0;
`;

export const FeatureList = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const RecommendDescription = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${Mobile} {
    width: calc((100% - 1 * 16px) / 2);
    gap: 12px;
  }
  @media ${Tablet} {
    flex: 1 1 34.79%;
    max-width: 34.79%;
  }
`;

export const Reason = styled.textarea`
  width: 100%;
  flex: 1 1 auto;
  ${InputRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: transparent;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textSecondary};
  padding: 12px;
  resize: none;
`;

export const DashedCard = styled.div`
  display: flex;
  justify-content: center;
  ${CardRadius};
  background-color: ${({ theme }) => theme.colors.white};
  background-image: ${({ theme }) => `repeating-linear-gradient(
    -4deg,
    ${theme.colors.secondary},
    ${theme.colors.secondary} 10px,
    transparent 10px,
    transparent 20px,
    ${theme.colors.secondary} 20px
  ),
  repeating-linear-gradient(
    86deg,
    ${theme.colors.secondary},
    ${theme.colors.secondary} 10px,
    transparent 10px,
    transparent 20px,
    ${theme.colors.secondary} 20px
  ),
  repeating-linear-gradient(
    176deg,
    ${theme.colors.secondary},
    ${theme.colors.secondary} 10px,
    transparent 10px,
    transparent 20px,
    ${theme.colors.secondary} 20px
  ),
  repeating-linear-gradient(
    266deg,
    ${theme.colors.secondary},
    ${theme.colors.secondary} 10px,
    transparent 10px,
    transparent 20px,
    ${theme.colors.secondary} 20px
  )`};
  background-size: 1px 100%, 100% 1px, 1px 100%, 100% 1px;
  background-position: 0 0, 0 0, 100% 0, 0 100%;
  background-repeat: no-repeat;
  padding: 33px 10px;
`;

export const Notice = styled.div`
  background-color: #fff9e6;
  ${CardRadius};
  color: ${({ theme }) => theme.colors.textPrimary};
  padding: 20px 24px;

  p + p {
    margin-top: 16px;
  }
`;

export const NoticeStep = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 400;
  font-size: 18px;

  button {
    cursor: default;
  }
`;

export const CategorySection = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
`;

export const CategoryList = styled.div`
  display: flex;
  gap: 8px;
`;

export const CategoryItem = styled.button<{ $active?: boolean }>`
  font-weight: 500;
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : "white"};
  color: ${({ $active, theme }) =>
    $active ? "white" : theme.colors.textPrimary};
  ${({ $active, theme }) =>
    $active &&
    `
    border: 1px solid ${theme.colors.primary};
  `};

  ${({ $active, theme }) =>
    !$active &&
    `
    &:hover {
      outline: 1px solid ${theme.colors.primary};
    }
  `};

  ${ButtonHoverTransition};
  padding: 8px 16px;
`;

export const ProductTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`;

export const Thead = styled.thead`
  font-weight: 700;
`;

export const Tbody = styled.tbody`
  font-weight: 500;
`;

export const Tr = styled.tr`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Th = styled.th`
  text-align: left;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 12px;
`;

export const Td = styled.td`
  padding: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:nth-child(3) {
    font-weight: 700;
  }
`;

export const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  ${CardRadius};
`;

export const ProductName = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: 500;
`;

export const ProductPrice = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const ProductMaterial = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const ProductFeature = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  ${ButtonRadius};
  ${ButtonHoverTransition};
`;

export const SubmitButton = styled(SecondaryButton)`
  ${buttonSizes.xlarge};
`;
