import React from "react";

function Tags(props) {
  return (
    <>
      <div className="logements_header_container1_details">
        {props.tags.map((element, index) => {
          return (
            <span className="tags" key={"tags" + index}>
              {element}
            </span>
          );
        })}
      </div>
    </>
  );
}

export default Tags;
