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

import { signOut } from "@/utils/api/auth/signout";
// import { OutlineButton } from "@/components/ui/buttons/Layout";
import { useState } from "react";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import { breakpoints } from "@/styles/container";
import { ImageLink as LogoWrapperDesktop } from "@/components/ui/images";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const isTablet = useBreakpoint(breakpoints.md);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };
  // ===測試 middleware 驗證===
  const handleLogout = async () => {
    try {
      const response = await signOut();
      console.log(response);
      switch (response.status) {
        case 200:
          router.push("/auth/signin");
          break;
        default:
          console.error("登出失敗");
      }
    } catch (error) {
      console.error("登出錯誤:", error);
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
          {/* <OutlineButton onClick={handleLogout}>登出</OutlineButton> */}
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
          <Link href="/user/profile" passHref>
            <AccountButton>
              <Avatar
                isLoggedIn={false}
                imageSrc="/images/avatar-placeholder.png"
              />
              <ButtonText>我的帳戶</ButtonText>
            </AccountButton>
          </Link>
        </ActionButtonGroup>
      </Container>
    </Wrapper>
  );
};
export default Header;
