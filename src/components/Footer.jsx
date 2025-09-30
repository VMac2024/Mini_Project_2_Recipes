import { blue } from "@mui/material/colors";
import { sapphireTheme } from "../themes/Theme";

function Footer() {
  return (
    <div className="footer" style={{ backgroundColor: sapphireTheme.background, color: sapphireTheme.foreground, zIndex: 1 }}>
      <h5>Email us: chefskitchen@gmail.com</h5>
      <h5>Copyright 2025 - CK Enterprises Ltd</h5>
      <h5>Check out our facebook page</h5>
    </div>
  );
}

export default Footer;
