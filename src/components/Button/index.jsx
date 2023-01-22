// LIBs
import { Link } from "react-router-dom";

// SERVICEs
import { cn } from "../../core/services/helper";

export default props => {
  switch (props.type) {
    case "link":
      return (
        <Link to={props.to} className={cn("Link", props.className)}>
          {props.children}
        </Link>
      )
    default:
      return (
        <button className={cn("Button", props.className)} onClick={props.onClick}>
          {props.children}
        </button>
      )
  }
};