import React from "react";

function SearchErrorAlert({ alert }) {
  return (
    <div>
      alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle'></i> {alert.message}
      </div>
    </div>
  );
}

export default SearchErrorAlert;
