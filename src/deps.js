import { menus } from "./constants";

export const getChildCategory = (category) => {
  let toRet = menus.filter((data) => {
    let dataToRet;
    if (category === data.parent) {
      data.isSelected = "false";
      dataToRet = data;
    } else if (category === data.category && data.parent !== "/") {
      data.isSelected = "true";
      dataToRet = data;
    }
    return dataToRet;
  });

  return toRet;
};
