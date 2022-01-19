import millify from "millify";
import React from "react";
import styled from "styled-components";

const OtherInfo = ({ coin }) => {
  return (
    <>
      <Group>
        <H2>Other Stats Info</H2>
        <p>
          An overview showing the statistics of {coin.name}, such as the base
          and quote currency, the rank and trading volume
        </p>
        <Paper>
          <p>Number of Markets</p>
          <span>{millify(coin.numberOfMarkets)}</span>
        </Paper>
        <Paper>
          <p>Number of Exchanges</p>
          <span>{millify(coin.numberOfExchanges)}</span>
        </Paper>
        <Paper>
          <p>Approved Supply</p>
          <span>{coin.supply.confirmed.toString()}</span>
        </Paper>
        <Paper>
          <p>Total Supply</p>
          <span>
            ${coin.totalSupply !== null ? millify(coin.supply.total) : "0"}
          </span>
        </Paper>
        <Paper>
          <p>Circulating Supply</p>
          <span>${millify(coin.supply.circulating)}</span>
        </Paper>
      </Group>
    </>
  );
};

export default OtherInfo;

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
  /* width: 50%; */
  max-width: 550px;
`;
const H2 = styled.h2`
  color: blue;
`;
