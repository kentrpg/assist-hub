import { useState, useEffect, useRef } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import styled from 'styled-components';

import Link from 'next/link';
import Image from 'next/image';
import { Spinner } from '@/components/Spinner';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  max-width: 400px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 32px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: 8px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const PasswordInput = styled(Input)`
  padding: 12px 32px 12px 12px;
`;

const PasswordWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const TogglePassword = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
`;

const RememberMe = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin: 8px 0;

  input {
    width: 16px;
    height: 16px;
  }
`;

const ForgotPassword = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-size: 14px;
  text-align: right;

  &:hover {
    text-decoration: underline;
  }
`;

const SignInButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const LineButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: white;
  border: 1px solid #00B900;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #00B900;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const RegisterPrompt = styled.div`
  margin-top: 24px;
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray[600]};

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    margin-left: 4px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    
    timeoutRef.current = setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    return () => {
      if(timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  }, []);

  return (
    <Container>
      <Title>登入</Title>
      <Form onSubmit={handleSubmit}>
        {loading ? <Spinner /> : 
          <>
            <InputGroup>
              <Label>帳號（您的電子信箱）</Label>
              <Input type="email" placeholder="請輸入電子信箱" />
            </InputGroup>

            <InputGroup>
              <Label>密碼</Label>
              <PasswordWrapper>
                <PasswordInput type={showPassword ? "text" : "password"} placeholder="請輸入密碼" />
                <TogglePassword 
                  type="button"
                  onClick={() => setShowPassword(prevVisible => !prevVisible)}
                  aria-label={showPassword ? "隱藏密碼" : "顯示密碼"}
                >
                  {showPassword ? <FiEye size={22} /> : <FiEyeOff size={22} />}
                </TogglePassword>
              </PasswordWrapper>
            </InputGroup>
            <RememberMe>
              <div>
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">記住我</label>
              </div>
              <ForgotPassword href="/forgot-password">忘記密碼</ForgotPassword>
            </RememberMe>

            <SignInButton type="submit">
              {loading ? 'Loading...' : '登入'}
            </SignInButton>
            <LineButton type="button">
              <Image src="/images/social/line-icon.png" alt="Line" width={24} height={24} />
              Line 登入
            </LineButton>

            <RegisterPrompt>
              還沒有帳號嗎？
              <Link href="/signup">立即註冊</Link>
            </RegisterPrompt>
          </>
        }

      </Form>
    </Container>
  );
};

export default SignIn;
