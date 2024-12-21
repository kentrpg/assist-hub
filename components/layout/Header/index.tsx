import { useRouter } from "next/router";
import { MdShoppingCart, MdSearch } from "react-icons/md";
import Avatar from "@/components/ui/Avatar";

import {
  Wrapper,
  Container,
  Navbar,
  CartButton,
  AccountButton,
  ButtonGroup,
  Logo,
  BrandGroup,
  Name,
  LogoutButton,
  NavLink,
  NavLinks,
  SearchButton,
} from "./styled";

import { signOut } from "@/utils/api/auth/signout";

const Header = () => {
  // ===測試 middleware 驗證===
  const router = useRouter();
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
        <Navbar>
          <BrandGroup>
            <Logo
              src="/images/i_logo.png"
              alt="輔具租賃網"
              width={20}
              height={20}
            />
            <Name>輔具租賃網</Name>
          </BrandGroup>
          <NavLinks>
            <NavLink href="/products">所有輔具</NavLink>
            <NavLink href="/faq">常見問題</NavLink>
            <NavLink href="/inquiry">詢問單</NavLink>
          </NavLinks>
        </Navbar>

        <ButtonGroup>
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
        </ButtonGroup>
      </Container>
    </Wrapper>
  );
};

export default Header;
