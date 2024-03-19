import React from "react";
import EnterName from "../start/start";
import styles from "./app.module.css";
import { useState } from "react";

function App() {
  const [playerInfo, setPlayerInfo] = useState({"x":"", "y":""});


  const handlePlayerInfo = (nameX, nameY) => {
    setPlayerInfo({
      "x":{nameX}, 
      "y":{nameY}
    });
  }

  return (
    <div className={styles.App}>
      <EnterName playerInfo={playerInfo} handlePlayerInfo={handlePlayerInfo}/>
    </div>
  );
}

export default App;
