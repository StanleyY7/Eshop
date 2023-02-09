export const openModal = (setOpened) => {
  setOpened(true);
};

export const handleClick = (navigate) => {
  navigate.push("#social");
};

export const updateMenu = (
  setMenuClass,
  setBurgerClass,
  setMenuClicked,
  menuClicked
) => {
  setMenuClicked(!menuClicked);
  setBurgerClass(
    menuClicked ? "burger__class unclicked" : "burger__class clicked"
  );
  setMenuClass(menuClicked ? "menu hidden" : "menu visible");
};

export const closeModal = (setOpened) => {
  setOpened(false);
};
