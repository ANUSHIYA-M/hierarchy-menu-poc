import React from "react";
import { MenuContext } from "./context";

const BackIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      height="20px"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 512 512"
      width="20px"
      xmlSpace="preserve"
    >
      <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " />
    </svg>
  );
};

const RenderChildMenu = () => {
  const { childCategory, onMenuClick } = React.useContext(MenuContext);

  return (
    <React.Fragment>
      {childCategory.map((data, index) => {
        const { _id, parent, title, category, isSelected } = data;

        return (
          <div
            className="child-menu-item"
            onClick={onMenuClick}
            data-category={category}
            data-parent={parent}
            data-selected={isSelected}
            key={`${_id}_${index}`}
          >
            <div className="menu-title">
              {isSelected === "true" && (
                <span className="back-icon">
                  <BackIcon />
                </span>
              )}
              {title}
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export { RenderChildMenu };
export default RenderChildMenu;
