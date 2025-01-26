import { useRouter } from "next/router";
import { MdShoppingCart, MdSearch } from "react-icons/md";
import Avatar from "@/components/ui/Avatar";

import {
  Wrapper,
  Container,
  Navbar,
  ActionButtonGroup,
  CartButton,
  SearchButton,
  AccountButton,
  Logo,
  NavLink,
  NavLinks,
  ButtonText,
  HamburgerMenuButton,
  HamburgerSvg,
  Overlay,
  LogoWrapperMobile,
} from "./styled";

import { useState } from "react";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { breakpoints } from "@/styles/container";
import { ImageLink as LogoWrapperDesktop } from "@/components/ui/images";
import Link from "next/link";
import { isValid } from "@/helpers/api/status";

const Header = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const isTablet = useBreakpoint(breakpoints.md);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const toggleDropdown = () => {
    console.log("toggleDropdown");
    // setDropdownOpen((prevState) => !prevState);
  };
  // ===測試 middleware 驗證===
  const handleLogout = async () => {
    const res = await fetch("/api/auth/signout", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });

    const result = await res.json();
    console.log("signout result", result);
    if (isValid(result)) {
      alert("登出成功");
      router.push("/");
    } else {
      alert(`登出失敗: ${result.message}`);
    }
  };
  // ===測試 middleware 驗證===
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
                src="/images/logo.png"
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
          <button
            onClick={handleLogout}
            style={{
              backgroundColor: "transparent",
            }}
          >
            登出
          </button>
          <Link href="/cart" passHref>
            <CartButton>
              <MdShoppingCart size={24} />
              <ButtonText>購物車</ButtonText>
            </CartButton>
          </Link>
          <SearchButton>
            <MdSearch size={24} />
            <ButtonText>搜尋輔具</ButtonText>
          </SearchButton>
          {/* <Link href="/user/profile" passHref> */}
          <AccountButton onClick={() => toggleDropdown()}>
            <Avatar
              isLoggedIn={false}
              imageSrc="/images/avatar-placeholder.png"
            />
            <ButtonText>我的帳戶</ButtonText>
          </AccountButton>
          {/* </Link> */}
        </ActionButtonGroup>
      </Container>
    </Wrapper>
  );
};
export default Header;
