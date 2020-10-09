import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./request";
function App() {
  return (
    <div className="App">
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trendind now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
