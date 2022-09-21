import { useEffect, useState } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "./axios";
import Homepage from "./components/Homepage";
import Crypto from "./components/Crypto";
import CryptoDetail from "./components/CryptoDetail";
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get("/coins");
      setData(response.data);
      setLoading(false);
    };

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
      </Switch>
    </Router>
  );
}

export default App;
