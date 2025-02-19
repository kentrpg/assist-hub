import { chineseTextStyle } from "@/helpers/format/textFormatting";
import { RoundedFull } from "@/styles/borderRadius";
import { Desktop, Mobile, Tablet } from "@/styles/container";
import { H1 } from "@/styles/typography";
import { IsOpen } from "@/types/uiProps";
import styled from "styled-components";

export const Header = styled.h1`
  text-align: center;
  ${H1};
  margin-bottom: 70px;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

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
  flex-direction: column;
  gap: 24px;
`;

export const CategoryItem = styled.li`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grey100};
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
  font-size: 28px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textPrimary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey100};
  padding-bottom: 20px;
`;

export const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const QuestionItem = styled.div`
  padding: 10px 0;

  @media ${Tablet} {
    padding: 20px 0;
  }
`;

export const QuestionHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;

  &,
  & > * {
    cursor: pointer;
  }

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
  color: white;
  font-size: 20px;
  font-weight: 400;

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

export const ToggleIcon = styled.div<IsOpen>`
  font-size: 0;
  padding: 6px;
  transform: ${({ $isOpen }) => ($isOpen ? "rotate(90deg)" : "none")};
  transition: transform 0.2s ease-in-out;

  @media ${Mobile} {
    padding: 13px;
  }
`;

export const QuestionContent = styled.div<IsOpen>`
  max-height: ${({ $isOpen }) => ($isOpen ? "1000px" : "0")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  margin-top: ${({ $isOpen }) => ($isOpen ? "16px" : "0")};
  margin-left: 49px;
  margin-right: 26px;
  transition: all 0.3s ease-in-out;
  ${chineseTextStyle};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textSecondary};

  @media ${Mobile} {
    margin-left: 90px;
  }
`;
