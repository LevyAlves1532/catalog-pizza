// CONFIG
import config from "../../core/config/App.config";

const Image = props => 
  <img 
    src={config.host+config.path+props.src || "#"} 
    className={props.className || ""} 
    alt={props.alt || ""} 
    {...props.img}
  />;

export default Image;
