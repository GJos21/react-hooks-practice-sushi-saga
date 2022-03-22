import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [menu, setMenu] = useState([]);
  const [startMenu, setStartMenu] = useState(0);
  const [budget, setBudget] = useState(50);
  let grabQty = 4;

  useEffect(() => {
    fetch(API)
      .then((resp) => resp.json())
      .then((list) => setMenu(list))
  }, [])

  const grabFourSushi = () => menu.slice(startMenu, startMenu + grabQty)

  const handleMoreSushi = () => setStartMenu(startMenu + 4);

  const handleEatSushi = (id) => {
    const newMenu = menu.map((sushi) => {
      if (sushi.id === id && budget - sushi.price >= 0) {
        setBudget(budget - sushi.price);
        return { ...sushi, eaten: true };
      } else {
        return sushi;
      }
    });
    setMenu(newMenu);
  }

  return (
    <div className="app">
      <SushiContainer plates={grabFourSushi()}
        onMoreSushi={handleMoreSushi}
        onEatSushi={handleEatSushi}
      />
      <Table
        moneyLeft={budget}
        plates={menu.filter((item) => item["eaten"])}
      />
    </div>
  );
}

export default App;
