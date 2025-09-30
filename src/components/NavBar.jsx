import { NavLink } from "react-router-dom";
import { sapphireTheme } from "../themes/Theme";
import zIndex from "@mui/material/styles/zIndex";

function NavBar() {
  // const { theme } = useThemeContext();

  return (
    <nav className="NavBar" style={{ backgroundColor: sapphireTheme.background, color: sapphireTheme.foreground, zIndex: 1 }}>
      {/*Found "zIndex : 1 as a suggested fix for the grid cards passing over the top of the navbar, instead of the navbar remaining solid  */}
      <p id="PageName">The Chef's Kitchen</p>
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/StartingPage">Getting Started</NavLink>
        </li>
        <li>
          <NavLink to="/RecipesPage">Recipes</NavLink>
        </li>

        <li>
          <NavLink to="/About">AboutUs</NavLink>
        </li>
      </ul>{" "}
    </nav>
  );
}

export default NavBar;
