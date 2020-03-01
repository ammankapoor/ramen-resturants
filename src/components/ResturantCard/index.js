import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "./ResturantCard.css";

function ResturantCard({cardData}) {
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>{cardData.Brand}</b>
        </h4>
        <p>{cardData.Variety}r</p>
        <p>Style: {cardData.Style}</p>
        <p>Country: {cardData.Country}</p>
      </div>
    </div>
  );
}

ResturantCard.propTypes = {};

ResturantCard.defaultProps = {};

export default ResturantCard;
