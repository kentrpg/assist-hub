import styled from 'styled-components';
import {Container432} from "@/styles/container";

/*=== Form ===*/

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #D1D5DB;
  border-radius: 8px;
  font-size: 16px;
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 16px;

  input:focus + label,
  input[data-has-value="true"] + label {
    top: 0;
    left: 12px;
    font-size: 16px;
    padding: 0 6.5px;
  }
`;

const InputField = styled.input`
  width: 100%;
  padding: 16px 16px;
  font-size: 16px;
  border: 1px solid #E9E5DE;
  border-radius: 8px;
  outline: none;

  &:focus {
    /* border-color: #1e3a8a; */
  }
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 22px;
  transform: translateY(-50%);
  font-size: 18px;
  color: ${ ({ theme }) => theme.colors.black };
  background-color: ${ ({ theme }) => theme.colors.white };
  transition: all 0.15s ease-in-out;
  pointer-events: none;
`;

const ErrorMessage = styled.span`
  color: #EF4444;
  font-size: 14px;
  margin-top: -12px;
  margin-bottom: 12px;
`;

/*=== Signin ===*/
const Container = styled(Container432)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
`;

const Title = styled.h1`
  margin-bottom: 16px;
`;

const RememberWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  margin-bottom: 24px;
`;

const TextMuted = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  font-size: 18px;
  color: ${ ({ theme }) => theme.colors.muted };
  input {
    width: 18px;
    height: 18px;
    border-width: 2px; // 沒有作用
    border-style: solid;
    border-color: ${ ({ theme }) => theme.colors.muted };
  }
`;

const FooterLinks = styled.div`
  text-align: center;
  font-size: 18px;
  a {
    margin-left: 4px;
  }
`;

export { Container, Title, Form, Input, InputWrapper, InputField, Label,ErrorMessage, RememberWrapper, TextMuted, FooterLinks };