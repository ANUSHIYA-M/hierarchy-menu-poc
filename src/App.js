import React from "react";
import { menus } from "./constants";
import { getChildCategory } from "./deps";
import { MenuContext } from "./context";
import RenderChildMenu from "./RenderChildMenu";
import "./styles.scss";

const Menu = () => {
  const [childCategory, setChildCategory] = React.useState([]);
  const [currMainMenu, setCurrMainMenu] = React.useState("");

  const onMenuClick = (event) => {
    const currEle = event.currentTarget;
    const category = currEle.getAttribute("data-category");
    const parent = currEle.getAttribute("data-parent");
    const selected = currEle.getAttribute("data-selected");
    let categoryList = getChildCategory(
      selected === "true" ? parent : category
    );

    if (parent === "/") {
      setCurrMainMenu(category);
    }
    setChildCategory(categoryList);
  };

  const contextProps = {
    childCategory,
    onMenuClick
  };

  return (
    <MenuContext.Provider value={contextProps}>
      <div className="menu-container">
        {menus.map((menuData, index) => {
          const { _id, parent, title, category } = menuData;

          return (
            <React.Fragment key={`${_id}_${index}`}>
              {parent === "/" && (
                <div className="menu-list">
                  <div
                    className="main-menu-item"
                    onClick={onMenuClick}
                    data-category={category}
                    data-parent={parent}
                  >
                    <span>{title}</span>
                  </div>
                  {currMainMenu === category && childCategory.length > 0 && (
                    <div className="child-menu-container">
                      <RenderChildMenu />
                    </div>
                  )}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </MenuContext.Provider>
  );
};

export { Menu };
export default Menu;
