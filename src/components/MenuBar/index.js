import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./MenuBar.css";

function MenuBar() {
  return (
    <div class="sidebar">
      <a class="active" href="#home">
        Home
      </a>
    </div>
  );
}

MenuBar.propTypes = {};

MenuBar.defaultProps = {};

export default MenuBar;
