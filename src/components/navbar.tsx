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
  font-size: 36px;
  color: white;
  margin: 0px 24px;
  font-weight: bold;
`;

const Navbar: React.FC = () => {
  return (
    <Container>
      <Logo>My Planet</Logo>
    </Container>
  );
};

export default Navbar;
