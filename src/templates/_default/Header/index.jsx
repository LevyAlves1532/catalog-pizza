// LIBs
import { Link } from "react-router-dom";

// COMPONENTs
import Image from "../../../components/Image";

// IMAGEs
import logo from "../../../assets/logo-catalog-pizza.png";

const HeaderDefault = props => {
  return (
    <Link to="/" className={`Header ${props.mode}`}>
      <div className="Header__container">
        <Image src={logo} />
      </div>
    </Link>
  );
}

export default HeaderDefault;