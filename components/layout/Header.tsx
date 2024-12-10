import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';
import styled from 'styled-components';
import Avatar from '../ui/Avatar';

const HeaderWrapper = styled.header`
  width: 100%;
  border-bottom: 1px solid #e5e7eb;
`;

const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 288px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const StyledLink = styled(Link)`
  color: #374151;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #111827;
  }
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const SearchWrapper = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  padding: 8px 16px 8px 40px;
  border-radius: 9999px;
  border: 1px solid #e5e7eb;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: #3b82f6;
  }
`;

const SearchIcon = styled(FiSearch)`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: #9ca3af;
`;

const CartButton = styled.button`
  color: ${ ({ theme }) => theme.colors.primary };
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  transition: color 0.2s;

  &:hover {
    color: #111827;
  }
`;

const Header = () => {
  const isLoggedIn = process.env.NEXT_PUBLIC_IS_LOGGED_IN === 'true';
  const avatarPath = process.env.NEXT_PUBLIC_AVATAR_IMAGE_PATH || '';

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
          <SearchWrapper>
            <SearchIcon />
            <SearchInput placeholder="電動輔助" />
          </SearchWrapper>
          
          <CartButton>
            <FiShoppingCart size={24} />
          </CartButton>
          
          <Link href={isLoggedIn ? '/profile' : '/signin'}>
            <Avatar isLoggedIn={isLoggedIn} imageSrc={avatarPath} />
          </Link>
        </Action>
      </Container>
    </HeaderWrapper>
  );
}

export default Header;