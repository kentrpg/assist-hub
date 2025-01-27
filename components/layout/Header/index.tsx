import { useRouter } from "next/router";
import { MdShoppingCart, MdSearch, MdPerson } from "react-icons/md";
import Avatar from "@/components/ui/Avatar";
import { checkAuthStatus } from "@/helpers/cookies";

import {
  Wrapper,
  Container,
  Navbar,
  ActionButtonGroup,
  CartButton,
  SearchButton,
  TriggerButton,
  Logo,
  NavLink,
  NavLinks,
  ButtonText,
  HamburgerMenuButton,
  HamburgerSvg,
  Overlay,
  LogoWrapperMobile,
  DropdownContainer,
  DropdownWrapper,
  DropdownList,
  DropdownItem,
  DropdownItemButton,
  DropdownItemLink,
} from "./styled";

import { useState, useRef, useEffect } from "react";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { breakpoints } from "@/styles/container";
import { ImageLink as LogoWrapperDesktop } from "@/components/ui/images";
import Link from "next/link";
import { isValid } from "@/helpers/api/status";

const Header = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const isTablet = useBreakpoint(breakpoints.md);
  const [isDropdownToggled, setIsDropdownToggled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = await checkAuthStatus();
      setIsLoggedIn(isAuthenticated);
    };

    checkAuth();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerButtonRef.current &&
        !triggerButtonRef.current.contains(event.target as Node)
      ) {
        setIsDropdownToggled(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const toggleAccountMenu = () => {
    console.log("toggleAccountMenu");
    setIsDropdownToggled((prev) => !prev);
  };

  const handleLogout = async () => {
    const res = await fetch("/api/auth/signout", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    const result = await res.json();
    console.log("signout result", result);
    if (isValid(result)) {
      alert("登出成功");
      window.location.href = "/";
    } else {
      alert(`登出失敗: ${result.message}`);
    }
  };

  const dropdownItems = [
    {
      label: "我的帳戶",
      href: "/user/profile",
    },
    {
      label: "訂單管理",
      href: "/user/order",
    },
    {
      label: "登出",
      onClick: handleLogout,
    },
  ];

  return (
    <Wrapper>
      <Container>
        <HamburgerMenuButton onClick={toggleMenu}>
          <HamburgerSvg $menuOpen={menuOpen}>
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              className="top"
              shapeRendering="crispEdges"
            />
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              className="middle"
              shapeRendering="crispEdges"
            />
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              className="bottom"
              shapeRendering="crispEdges"
            />
          </HamburgerSvg>
        </HamburgerMenuButton>
        {menuOpen && <Overlay onClick={toggleMenu} $menuOpen={menuOpen} />}
        {/* <LogoWrapperMobile>
          <Logo
            src="/images/logo.png"
            alt="輔具租賃網"
            width={40}
            height={40}
          />
        </LogoWrapperMobile> */}
        <Navbar $menuOpen={menuOpen}>
          {isTablet && (
            <LogoWrapperDesktop href="/" passHref>
              <Logo
                src="/images/LOGO-default.webp"
                alt="輔具租賃網"
                width={40}
                height={40}
              />
            </LogoWrapperDesktop>
          )}
          <NavLinks>
            <NavLink href="/product" $active={router.pathname === "/product"}>
              所有輔具
            </NavLink>
            <NavLink href="/faq" $active={router.pathname === "/faq"}>
              常見問題
            </NavLink>
            <NavLink href="/inquiry" $active={router.pathname === "/inquiry"}>
              詢問單
            </NavLink>
          </NavLinks>
        </Navbar>

        <ActionButtonGroup>
          <SearchButton>
            <MdSearch size={24} />
            <ButtonText>快速適配</ButtonText>
          </SearchButton>
          <Link href="/cart" passHref>
            <CartButton>
              <MdShoppingCart size={24} />
              <ButtonText>購物車</ButtonText>
            </CartButton>
          </Link>
          <DropdownWrapper>
            {isLoggedIn ? (
              <TriggerButton ref={triggerButtonRef} onClick={toggleAccountMenu}>
                <Avatar
                  isLoggedIn={true}
                  imageSrc="/images/avatar-placeholder.png"
                />
                <ButtonText>我的帳戶</ButtonText>
              </TriggerButton>
            ) : (
              <TriggerButton ref={triggerButtonRef} onClick={toggleAccountMenu}>
                <MdPerson size={24} />
                <ButtonText>登入</ButtonText>
              </TriggerButton>
            )}
            <DropdownContainer $isOpen={isDropdownToggled}>
              <DropdownList>
                {dropdownItems.map((item) => (
                  <DropdownItem
                    key={item.label}
                    $active={item.href ? router.pathname === item.href : false}
                  >
                    {item.href ? (
                      <DropdownItemLink href={item.href}>
                        {item.label}
                      </DropdownItemLink>
                    ) : (
                      <DropdownItemButton onClick={item.onClick}>
                        {item.label}
                      </DropdownItemButton>
                    )}
                  </DropdownItem>
                ))}
              </DropdownList>
            </DropdownContainer>
          </DropdownWrapper>
        </ActionButtonGroup>
      </Container>
    </Wrapper>
  );
};
export default Header;
