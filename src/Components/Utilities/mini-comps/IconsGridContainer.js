import React from "react";

const IconsGridContainer = ({ data }) => {
  return (
    <div className="icons-grid-container">
      {data?.map(({ title, img }, index) => (
        <div
          data-animname="fade-in-up"
          data-onetime="true"
          data-delay={(index / 30) % 20}
          className="icon-item"
          key={index}
        >
          <img src={img} alt={img} />

          {title && (
            <strong>
              <p>{title.replace(/-/gi, " ").toUpperCase()}</p>
            </strong>
          )}
        </div>
      ))}
    </div>
  );
};

export default IconsGridContainer;
