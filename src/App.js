import React from "react";

import "./App.css";
import Card from "./components/Card/Card";
import cardData from "./store/item_data.json";

function App() {
  console.log(cardData[0]);
  return (
    <div>
      <main className="main">
        <Card data={cardData[0]} />
      </main>
    </div>
  );
}

export default App;
