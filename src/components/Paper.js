import millify from "millify";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Paper = ({ data }) => {
  return (
    <Link to={`/crypto/${data.uuid}`}>
      <Container>
        <Head>
          <p>
            <span>{data.rank}.</span>
            {data.name}
          </p>
          <Image src={data.iconUrl} alt="icon" />
        </Head>
        <Content>
          <p>Price: {millify(data.price)}</p>
          <p>Market Cap: {millify(data.marketCap)}</p>
          <p>Daily Change: {data.change}%</p>
        </Content>
      </Container>
    </Link>
  );
};

export default Paper;

const Container = styled.div`
  border: 1 px solid #f0f0f0;
  cursor: pointer;
  padding: 10px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  background: #fff;
  border-radius: 5px;
  min-width: 250px;
  margin-bottom: 20px;

  &:hover {
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  }
`;

const Image = styled.img`
  width: 35px;
  height: 35px;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
  padding: 10px 24px;

  p {
    font-size: 16px;
    width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const Content = styled.div`
  padding: 24px;

  p {
    font-size: 14px;
    margin-bottom: 14px;
  }
`;
