import React from "react";
import ClientApp from "./ClientApp/ClientApp";
import HackerPanel from "./HackerPanel/HackerPanel";

function App() {
  return (
    <div className="App">
      <div className="d-flex flex-row">
        <ClientApp />
        <HackerPanel />
      </div>
    </div>
  );
}

export default App;
