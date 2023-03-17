import React from "react";

const SearchErrorAlert = ({ alert }) => {
  return (
    <div>
      alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle'></i> {alert.message}
      </div>
    </div>
  );
};

export default SearchErrorAlert;
