import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type: any;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Container>
    <button {...props}>{children}</button>
  </Container>
);

export default Button;
