const CORS = "https://scrappy-php.herokuapp.com/?url=";

const getMenuItems = async () => {
  const menusAPI = "desafioreact.s3.amazonaws.com/menu/menu.json";

  const response = await fetch(CORS + menusAPI);
  const data = await response.json();

  return data.menus;
};

const getAllItems = async () => {
  const itemsAPI = "desafioreact.s3.amazonaws.com/menu/itens.json";

  const response = await fetch(CORS + itemsAPI);
  const data = await response.json();

  return data.items;
};

export { getMenuItems, getAllItems };
