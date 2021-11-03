import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Paper from "./Paper";

const TopCrypto = ({ crypto }) => {
  const datas = crypto.slice(0, 10);
  return (
    <Container>
      <Title>
        <h2>Top 10 Cryptos In The World</h2>
        <Link to="/crypto">
          <span>Show More</span>
        </Link>
      </Title>
      <Group>
        {datas.map((data) => (
          <Paper data={data} key={data.id} />
        ))}
      </Group>
    </Container>
  );
};

export default TopCrypto;

const Container = styled.div`
  width: 90%;
  margin: 10px auto;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin-bottom: 0.5 em;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 600;
    font-size: 30px;
    line-height: 1.35;
  }
  span {
    color: #1890ff;
    outline: none;
    cursor: pointer;
    transition: color 0.3s;
  }
`;

const Group = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 20px 0;
`;
