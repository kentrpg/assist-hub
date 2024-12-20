import { useRouter } from "next/router";
import { MdShoppingCart, MdSearch } from "react-icons/md";
import Avatar from "@/components/ui/Avatar";
import Link from "next/link";

import {
  HeaderWrapper,
  Container,
  Navbar,
  CartButton,
  AccountButton,
  HeaderActions,
  LogoImage,
  LogoSection,
  LogoText,
  LogoutButton,
  NavLink,
  NavLinks,
  SearchButton,
} from "./styled";

import { signOut } from "@/utils/api/auth/signout";

const Header = () => {
  // const isLoggedIn = process.env.NEXT_PUBLIC_IS_LOGGED_IN === "true";
  // const avatarPath = process.env.NEXT_PUBLIC_AVATAR_IMAGE_PATH || "";

  // ===測試 middleware 驗證===
  const router = useRouter();
  // TBD:  API 相關的處理，將所有與 UI 相關的邏輯分離
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
    // router.push("/auth/signin");
  };
  // ===測試 middleware 驗證===

  return (
    <HeaderWrapper>
      <Container>
        <Navbar>
          <LogoSection>
            <LogoImage
              src="/images/i_logo.png"
              alt="輔具租賃網"
              width={20}
              height={20}
            />
            <LogoText>輔具租賃網</LogoText>
          </LogoSection>
          <NavLinks>
            <NavLink as={Link} href="/products">
              所有輔具
            </NavLink>
            <NavLink as={Link} href="/faq">
              常見問題
            </NavLink>
            <NavLink as={Link} href="/inquiry">
              詢問單
            </NavLink>
          </NavLinks>
        </Navbar>

        <HeaderActions>
          <LogoutButton onClick={handleLogout}>登出</LogoutButton>
          <CartButton>
            <MdShoppingCart size={24} />
            購物車
          </CartButton>
          <SearchButton>
            <MdSearch size={24} />
            搜尋輔具
          </SearchButton>
          <AccountButton>
            <Avatar
              isLoggedIn={false}
              imageSrc="/images/avatar-placeholder.png"
            />
            我的帳戶
          </AccountButton>
        </HeaderActions>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
