import { chineseTextStyle } from "@/helpers/format/textFormatting";
import { RoundedFull } from "@/styles/borderRadius";
import { Desktop, Mobile, Tablet } from "@/styles/container";
import { H1 } from "@/styles/typography";
import { IsActive } from "@/types/uiProps";
import styled from "styled-components";

export const Header = styled.h1`
  text-align: center;
  ${H1};
  margin-bottom: 40px;

  @media ${Tablet} {
    margin-bottom: 70px;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;

  @media ${Tablet} {
    flex-direction: row;
    gap: 100px;
  }

  @media ${Desktop} {
    gap: 204px;
  }
`;

export const Navigation = styled.div`
  position: static;
  top: 24px;
  height: fit-content;
  align-self: flex-start;

  @media ${Tablet} {
    position: sticky;
  }
`;

export const CategoryList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media ${Tablet} {
    flex-direction: column;
  }
`;

export const CategoryItem = styled.li<IsActive>`
  font-size: 16px;
  font-weight: ${({ $isActive }) => ($isActive ? 700 : 400)};
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.primary : theme.colors.grey100};
  cursor: pointer;
  transition: color 0.1s ease-in-out, font-weight 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
  }
`;

export const Content = styled.div`
  flex: 1;
`;

export const Question = styled.div`
  margin-bottom: 24px;
  scroll-margin-top: 24px;

  &:last-child {
    margin-bottom: 0;
  }

  @media ${Tablet} {
    margin-bottom: 60px;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey100};
  padding-bottom: 20px;

  @media ${Tablet} {
    font-size: 28px;
  }
`;

export const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuestionItem = styled.label`
  padding: 10px 0;

  @media ${Tablet} {
    padding: 20px 0;
  }
`;

export const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  gap: 0;

  @media ${Mobile} {
    gap: 40px;
  }
`;

export const QuestionBadge = styled.div`
  width: 36px;
  height: 36px;
  text-align: center;
  ${RoundedFull};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  transition: background-color 0.1s ease-in-out, color 0.1s ease-in-out;
  font-size: 20px;
  font-weight: 400;

  ${QuestionItem}:hover & {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
  }

  @media ${Mobile} {
    width: 50px;
    height: 50px;
    font-size: 28px;
  }
`;

export const QuestionTitle = styled.h3`
  flex: 1;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-left: 13px;

  @media ${Mobile} {
    margin-left: 0;
  }
`;

export const ToggleIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 0;
  padding: 6px;
  transition: transform 0.18s ease-in-out;

  input:checked ~ ${QuestionHeader} > & {
    transform: rotate(90deg);
  }

  @media ${Mobile} {
    padding: 13px;
  }
`;

export const HiddenCheckbox = styled.input`
  display: none;
`;

export const QuestionBody = styled.div`
  ${chineseTextStyle};
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.2s ease-in-out;
  padding: 0 16px 0 50px;

  input:checked ~ & {
    grid-template-rows: 1fr;
  }

  @media ${Mobile} {
    padding: 0 16px 0 90px;
  }
`;

export const QuestionContent = styled.p`
  overflow: hidden;
`;
