import millify from "millify";
import React from "react";
import styled from "styled-components";

const Exchange = ({ exchange }) => {
  return (
    <Group>
      <Logo>
        <span>{exchange.rank}.</span>
        <Image src={exchange.iconUrl} alt="logo" />
        <span>{exchange.name}</span>
      </Logo>
      <p>{millify(exchange.volume)}</p>
      <p>{millify(exchange.numberOfMarkets)}</p>
      <p>{millify(exchange.marketShare)}%</p>
    </Group>
  );
};

export default Exchange;

const Image = styled.img`
  width: 35px;
  height: 35px;
  margin: 0 3px;
`;
const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 10px 4px;
  border-radius: 5px;
  margin: 10px 0;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
`;
