// Navbar functions

// For Hamburger Menu display, updates display/classes depending on if clicked or not

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
