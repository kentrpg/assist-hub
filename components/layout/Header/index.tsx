import { useRouter } from "next/router";
import { MdShoppingCart } from "react-icons/md";
import Link from "next/link";

import {
  HeaderWrapper,
  Container,
  Navbar,
  StyledLink,
  Action,
  LogoutButton,
  SearchWrapper,
  SearchIcon,
  SearchInput,
  CartButton,
} from "./styled";

import Avatar from "@/components/ui/Avatar";

/** QUESTION
 * Header
 * 📋 TEST: 目前添加了 LogoutButton 用來測試 middleware 驗證
 */

const Header = () => {
  const isLoggedIn = process.env.NEXT_PUBLIC_IS_LOGGED_IN === "true";
  const avatarPath = process.env.NEXT_PUBLIC_AVATAR_IMAGE_PATH || "";

  // ===測試 middleware 驗證===
  const router = useRouter();
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    router.push("/auth/signin");
  };
  // ===測試 middleware 驗證===

  return (
    <HeaderWrapper>
      <Container>
        <Navbar>
          <StyledLink href="/">首頁</StyledLink>
          <StyledLink href="/products">所有輔具</StyledLink>
          <StyledLink href="/faq">常見問題</StyledLink>
          <StyledLink href="/inquiry">詢問單</StyledLink>
        </Navbar>

        <Action>
          {/* // ===測試 middleware 驗證=== */}
          <LogoutButton onClick={handleLogout}>登出</LogoutButton>
          {/* // ===測試 middleware 驗證=== */}
          <SearchWrapper>
            <SearchIcon />
            <SearchInput placeholder="電動輪椅" />
          </SearchWrapper>

          <CartButton>
            <MdShoppingCart size={24} />
          </CartButton>

          <Link href={isLoggedIn ? "/auth" : "/signin"}>
            <Avatar isLoggedIn={isLoggedIn} imageSrc={avatarPath} />
          </Link>
        </Action>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
