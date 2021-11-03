import React from "react";
import styled from "styled-components";
import millify from "millify";

const Stats = ({ stats }) => {
  return (
    <Container>
      <Heading>Global Crypto Stats</Heading>
      <Group>
        <Paper>
          <p>Total Cryptocurrencies</p>
          <span>{millify(stats.total)}</span>
        </Paper>
        <Paper>
          <p>Total Exchanges</p>
          <span>{millify(stats.totalExchanges)}</span>
        </Paper>
        <Paper>
          <p>Total Market cap</p>
          <span>{millify(stats.totalMarketCap)}</span>
        </Paper>
        <Paper>
          <p>Total 24h Volume</p>
          <span>{millify(stats.total24hVolume)}</span>
        </Paper>
        <Paper>
          <p>Total Markets</p>
          <span>{millify(stats.totalMarkets)}</span>
        </Paper>
      </Group>
    </Container>
  );
};

export default Stats;

const Container = styled.div`
  width: 90%;
  margin: 10px auto;
`;
const Group = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const Heading = styled.h2`
  margin-bottom: 0.5 em;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
  font-size: 30px;
  line-height: 1.35;
`;
const Paper = styled.div`
  /* width: 30%; */
  margin: 0 10px;

  p {
    margin-bottom: 4 px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
  span {
    color: rgba(0, 0, 0, 0.85);
    font-size: 24px;
  }
`;
