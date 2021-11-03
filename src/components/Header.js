import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Nav>
      <H3>CRYPTO</H3>
      <Ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/crypto">
          <li>Cryptocurrency</li>
        </Link>
        <Link to="/exchanges">
          <li>Exchanges</li>
        </Link>
      </Ul>
    </Nav>
  );
};

export default Header;

const Nav = styled.div`
  background-color: #001529;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  width: 70%;
  color: #f9f9f9;

  li {
    /* margin-right: 20px; */
    cursor: pointer;
  }
  a {
    color: inherit;
  }
`;

const H3 = styled.div`
  color: #f9f9f9;
  margin-left: 10px;
`;
