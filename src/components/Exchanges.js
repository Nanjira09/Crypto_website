import React from "react";
import styled from "styled-components";
import Exchange from "./Exchange";

const Exchanges = ({ data }) => {
  const { exchanges } = data.data;
  return (
    <Container>
      <Title>
        <p>Exchanges</p>
        <p>24h Trade Volume</p>
        <p>Markets</p>
        <p>Change</p>
      </Title>
      {exchanges.map((exchange) => (
        <Exchange exchange={exchange} key={exchange.id} />
      ))}
    </Container>
  );
};

export default Exchanges;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
`;
