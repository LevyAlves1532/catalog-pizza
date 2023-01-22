// LIBs
import { Link } from "react-router-dom";

// SERVICEs
import { cn } from "../../core/services/helper";

// ICONs
import { FiShoppingCart } from "react-icons/fi";

export default props => (
  <Link to="/cart" className={cn("ButtonCart", props.className)}>
    <div className="ButtonCart__container">
      <div>
        <span>{props.count}</span>
        <FiShoppingCart />
      </div>
    </div>
  </Link>
)