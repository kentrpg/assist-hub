import styled, { css } from "styled-components";
import { Container1344, Desktop, Tablet } from "@/styles/container";
import Link from "next/link";
import {
  ShadowLow,
  NavLinkHover,
  ButtonHoverTransition,
  DropdownShadow,
} from "@/styles/effect";
import { InputRadius, RoundedFull } from "@/styles/borderRadius";
import {
  AccentIconButton,
  PrimaryIconButton,
  SecondaryIconButton,
} from "@/components/ui/buttons/Layout";
import { DropdownTransition } from "@/styles/effect";

export const Wrapper = styled.header`
  width: 100%;
  background: transparent;
`;

export const Container = styled(Container1344)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 10px;
`;

export const Navbar = styled.nav<{ $menuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: -1px;
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 9;
  padding: 80px 16px;
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.1);
  transform: ${({ $menuOpen }) =>
    $menuOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;
  will-change: transform;

  @media ${Tablet} {
    height: inherit;
    width: auto;
    position: sticky;
    flex-direction: row;
    align-items: center;
    gap: 25px;
    ${ShadowLow};
    ${RoundedFull};
    padding: 15px 30px;
    transform: translateX(0);
  }
`;

export const LogoWrapperMobile = styled.div`
  font-size: 0;
  display: block;
  @media ${Tablet} {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

export const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 16px;
  @media ${Tablet} {
    align-items: center;
    flex-direction: row;
    padding: 0;
  }
`;

export const NavLink = styled(Link)<{ $active?: boolean }>`
  position: relative;
  font-size: 16px;
  font-weight: 700;
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.textPrimary};
  padding: 8px;
  ${NavLinkHover};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  &:active {
    color: ${({ theme }) => theme.colors.primary};
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ $active }) => ($active ? "100%" : "0")};
    height: 1px;
    background-color: ${({ theme }) => theme.colors.primary};
    /* transition: width 0.3s ease-in-out; */
  }
`;

export const ActionButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const BaseButton = css`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  padding: 13px;
  @media ${Desktop} {
    padding: 14px 25px;
  }
`;

export const CartButton = styled(SecondaryIconButton)`
  ${BaseButton};
  @media ${Desktop} {
    padding: 14px 33px;
  }
`;

export const SearchButton = styled(AccentIconButton)`
  ${BaseButton};
`;

export const TriggerButton = styled(PrimaryIconButton)`
  ${BaseButton};
  @media ${Desktop} {
    padding: 14px 41px;
  }
`;

export const ButtonText = styled.span`
  display: none;
  color: ${({ theme }) => theme.colors.white};
  @media ${Desktop} {
    display: block;
  }
`;

export const HamburgerMenuButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  z-index: 10;
  @media ${Tablet} {
    display: none;
  }
`;

export const HamburgerSvg = styled.svg<{ $menuOpen: boolean }>`
  width: 30px;
  height: 30px;
  transform: scaleX(-1);

  line {
    stroke: ${({ theme }) => theme.colors.textPrimary};
    stroke-dasharray: 100%;
    stroke-dashoffset: 0%;
    transition: transform 0.3s, stroke-dashoffset 0.4s;
    transform-origin: center;
    stroke-width: 3px;
  }

  .top {
    transform: translateY(-35%);
  }

  .middle {
    transform: scaleX(1);
    transition: opacity 0.3s, transform 0.3s;
  }

  .bottom {
    transform: translateY(33%);
    stroke-dasharray: 100%;
    stroke-dashoffset: 9px;
  }

  &:hover .bottom {
    stroke-dashoffset: 0%;
  }

  ${({ $menuOpen }) =>
    $menuOpen &&
    `
    .top {
      transform: rotate(45deg);
      stroke-linecap: round;
    }

    .middle {
      transform: scaleX(0.1);
      opacity: 0;
    }

    .bottom {
      transform: rotate(-45deg);
      stroke-linecap: round;
      stroke-dashoffset: 0%;
    }
  `}
`;

export const Overlay = styled.div<{ $menuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: ${({ $menuOpen }) =>
    $menuOpen ? "translateX(0)" : "translateX(-100%)"};
  will-change: transform;
  transition: transform 0.5s cubic-bezier(0.55, 0.03, 0.37, 0.96);
  /* opacity: ${({ $menuOpen }) => ($menuOpen ? "1" : "0")}; */
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 8;
  pointer-events: ${({ $menuOpen }) => ($menuOpen ? "auto" : "none")};
`;

export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  padding-bottom: 10px;
`;

export const DropdownContainer = styled.div<{ $isOpen: boolean }>`
  height: ${({ $isOpen }) => ($isOpen ? "124px" : "0")};
  width: 160px;
  position: absolute;
  top: 100%;
  right: 50%;
  transform: translateX(50%);
  background: ${({ theme }) => theme.colors.white};
  ${InputRadius};
  overflow: hidden;
  ${({ $isOpen }) => DropdownTransition($isOpen)};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  ${DropdownShadow};
  z-index: 1;
  cursor: pointer;
  padding: 8px 0;
`;

export const DropdownList = styled.ul`
  font-size: 14px;
`;

export const DropdownItem = styled.li<{ $active?: boolean }>`
  ${ButtonHoverTransition};

  ${({ $active, theme }) =>
    $active &&
    css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    `}

  ${({ $active, theme }) =>
    !$active &&
    css`
      &:hover {
        background-color: ${theme.colors.infoLight};
      }
    `}
`;

const DropdownItemBase = css`
  width: 100%;
  text-align: left;
  color: inherit;
  padding: 8px 16px;
`;

export const DropdownItemButton = styled.button`
  ${DropdownItemBase};
  border: none;
  background: none;
`;

export const DropdownItemLink = styled(Link)`
  ${DropdownItemBase};
`;
