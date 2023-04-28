import React from "react";

function Ratings(props) {
  return (
    <>
      <div className="logements_header_container2_stars">
        {[1, 2, 3, 4, 5].map((num, index) => (
          <span className={props.rating >= num ? "on" : ""} key={num + index}>
            ★
          </span>
        ))}
      </div>
    </>
  );
}

export default Ratings;
