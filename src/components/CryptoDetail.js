import axios from "../axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Description from "./Description";
import Statistics from "./Statistics";
import OtherInfo from "./OtherInfo";

const CryptoDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const { coin } = data ? data : [];

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/coin/${id}`);
      setData(response.data.data);
    };
    fetchData();
  }, [id]);
  return (
    <>
      {coin ? (
        <Container>
          <Canva>
            <Statistics coin={coin} />
            <OtherInfo coin={coin} />
          </Canva>
          <Canva>
            <Description coin={coin} />
          </Canva>
        </Container>
      ) : (
        <p style={{ textAlign: "center" }}>Loading...</p>
      )}
    </>
  );
};

export default CryptoDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Canva = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
`;
