import HTMLReactParser from "html-react-parser";
import React from "react";
import styled from "styled-components";

const Description = ({ coin }) => {
  return (
    <>
      <Div>
        <H2>What is {coin.name} ?</H2>
        {HTMLReactParser(coin.description)}
      </Div>
      <Div>
        <H2>{coin.name} Links</H2>
        {coin.links.map((link, i) => (
          <Leaf key={i}>
            <p>{link.type}</p>
            <a href={link.url} target="_blank" rel="noreferrer">
              <p>{link.name}</p>
            </a>
          </Leaf>
        ))}
      </Div>
    </>
  );
};

export default Description;
const Div = styled.div`
  width: 550px;
`;

const Leaf = styled.div`
  display: flex;
  background-color: white;
  margin: 10px 0;
  border-radius: 5px;
  padding: 10px;
  justify-content: space-between;
`;

const H2 = styled.h2`
  color: blue;
`;
