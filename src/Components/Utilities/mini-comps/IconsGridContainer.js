import React from "react";

const IconsGridContainer = ({ data }) => {
  console.log(data);
  return (
    <div className="icons-grid-container">
      {data?.map(({ title, img }, index) => (
        <div className="icon-item" key={index}>
          <img src={img} alt={img} />
          <strong>
            <p>{title.replace(/-/gi, " ").toUpperCase()}</p>
          </strong>
        </div>
      ))}
    </div>
  );
};

export default IconsGridContainer;
