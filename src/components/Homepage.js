import React from "react";
import styled from "styled-components";
import Stats from "./Stats";
import TopCrypto from "./TopCrypto";

const Homepage = ({ data }) => {
  return (
    <Container>
      <Stats stats={data.data.stats} />
      <TopCrypto crypto={data.data.coins} />
    </Container>
  );
};

export default Homepage;

const Container = styled.div``;
