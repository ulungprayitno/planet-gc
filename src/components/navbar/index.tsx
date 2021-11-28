import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 500%;
  height: 76px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #022b44;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const Logo = styled.p`
  font-size: 40px;
  color: white;
  margin: 0px 24px;
  font-weight: bold;
  cursor: pointer;
`;

const Menu = styled.p`
  cursor: pointer;
  font-size: 24px;
  margin: 0px 40px 0px 0px;
  color: white;
  padding-left: 32px;
`;

const Navbar: React.FC = () => {
  return (
    <Container>
      <Logo onClick={() => window.location.href = '/'}>My Planet</Logo>
      <Menu onClick={() => window.location.href = '/wishlist'}>Wishlist</Menu>
    </Container>
  );
};

export default Navbar;
