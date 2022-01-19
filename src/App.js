import { useEffect, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "./axios";
import Homepage from "./components/Homepage";
import Crypto from "./components/Crypto";
import CryptoDetail from "./components/CryptoDetail";
// import Exchanges from "./components/Exchanges";
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [exchanges, setExchanges] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get("/coins");
      setData(response.data);
      setLoading(false);
    };
    // const fetchExchanges = async () => {
    //   const response = await axios.get("/exchanges");
    //   setExchanges(response.data);
    // };

    // fetchExchanges();

    fetchData();
  }, []);
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          {loading ? (
            <p style={{ textAlign: "center" }}>Loading...</p>
          ) : (
            data && <Homepage data={data} />
          )}
        </Route>
        <Route path="/crypto" exact>
          {loading ? (
            <p style={{ textAlign: "center" }}>Loading...</p>
          ) : (
            data && <Crypto data={data} />
          )}
        </Route>
        <Route path="/crypto/:id" exact>
          <CryptoDetail />
        </Route>
        {/* <Route path="/exchanges" exact>
          {exchanges && <Exchanges data={exchanges} />}
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
