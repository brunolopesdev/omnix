import { FaMagento } from "react-icons/fa";
import "./index.scss";

export const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="wrapper">
        <div className="footerLogo">
          <FaMagento />
          Omnix
        </div>
      </div>
    </footer>
  );
};
