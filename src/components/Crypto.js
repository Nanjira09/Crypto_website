import React, { useState } from "react";
import styled from "styled-components";
import Paper from "./Paper";

const Crypto = ({ data }) => {
  const [search, setSearch] = useState("");
  const { coins } = data.data;
  const filteredData = coins.filter((coin) => coin.name.includes(search));
  return (
    <Container>
      <Input
        placeholder="Search..."
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Group>
        {filteredData.map((coin) => (
          <Paper data={coin} key={coin.id} />
        ))}
      </Group>
    </Container>
  );
};

export default Crypto;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;
const Input = styled.input`
  padding: 10px 5px;
  border-radius: 5px;
  min-width: 250px;
`;
const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 10px;
`;
