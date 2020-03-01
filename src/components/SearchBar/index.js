import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./SearchBar.css";

function SearchBar({listData, setListData}) {

const filterData = function(e) {
            var tempdata = listData.filter(function(el) {
        return el.Brand.includes(e.target.value);
    });
    setListData(tempdata);
    };

  return (
    <input type="text" name="search" placeholder="Type & Search"  onChange={filterData}/>
  );
}

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default SearchBar;
