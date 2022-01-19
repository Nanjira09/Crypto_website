import millify from "millify";
import React from "react";
import styled from "styled-components";

const Statistics = ({ coin }) => {
  return (
    <>
      <Group>
        <H2>{coin.name} Value Statistics</H2>
        <p>
          An overview showing the statistics of {coin.name}, such as the base
          and quote currency, the rank and trading volume
        </p>
        <Paper>
          <p>Price to USD</p>
          <span>${millify(coin.price)}</span>
        </Paper>
        <Paper>
          <p>Rank</p>
          <span>{coin.rank}</span>
        </Paper>
        <Paper>
          <p>24h Volume</p>
          {/* <span>${millify(coin.24hVolume)}</span> */}
        </Paper>
        <Paper>
          <p>Market Cap</p>
          <span>${millify(coin.marketCap)}</span>
        </Paper>
        <Paper>
          <p>All-time-high(daily avg.)</p>
          <span>${millify(coin.allTimeHigh.price)}</span>
        </Paper>
      </Group>
    </>
  );
};

export default Statistics;

const Paper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px;
  background-color: white;
  padding: 10px;
  border-radius: 5px;

  span {
    font-weight: bold;
  }
`;
const Group = styled.div`
  max-width: 550px;
  /* width: 50%; */
`;
const H2 = styled.h2`
  color: blue;
`;
