import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <RouterLink to="/"> Все посты</RouterLink>
      <RouterLink to="/add"> Создать пост+</RouterLink>
      <RouterLink to="/auth"> Выйти</RouterLink>
    </div>
  );
};

export default Header;
