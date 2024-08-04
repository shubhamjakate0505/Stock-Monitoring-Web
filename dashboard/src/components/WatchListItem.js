import React from "react";

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import WatchListAction from "./WatchListAction";

function WacthListItem({ stock }) {
  const [showWatchListActions, SetShowWatchListActions] = React.useState(false);

  const handleMouseEnter = (e) => SetShowWatchListActions(true);

  const handleMouseExit = (e) => SetShowWatchListActions(false);

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseExit}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? <KeyboardArrowDown className="down" /> : <KeyboardArrowUp className="up" />}
          <span className="percent">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListAction uid={stock.name} />}
    </li>
  );
}

export default WacthListItem;
