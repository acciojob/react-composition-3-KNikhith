
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
        <Tooltip text="this is a tooltip">
          <button>Hover on Me</button>
        </Tooltip>
        <Tooltip text="more info here">
            <p>More info on me</p>
        </Tooltip>
    </div>
  )
}

export default App
