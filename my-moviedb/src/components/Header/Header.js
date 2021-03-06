import React from "react";
import Searchbar from "./Searchbar/Searchbar";
import Filters from "./Filters/Filters";
import "./Header.css";

const Header = ({
  searchVar,
  setSearchVar,
  radio,
  setRadio,
  range,
  setRange,
}) => {
  return (
    <div className="header">
      <Searchbar searchVar={searchVar} setSearchVar={setSearchVar} />
      <div className="filters">
        <Filters
          radio={radio}
          setRadio={setRadio}
          range={range}
          setRange={setRange}
        />
      </div>
    </div>
  );
};

export default Header;
