// SERVICEs
import { cn } from "../../core/services/helper";

export default props => (
  <div className={cn("CardSize", props.className)} onClick={props.onClick}>
    <div className="CardSize__left">
      <h3>{props.logo}</h3>
    </div>

    <div className="CardSize__right">
      <h4>{props.title}</h4>
      <span>Quantidade de Sabores: {props.flavors}</span>
      <p>R$ {String(props.price).indexOf(".") > -1 ? String(props.price).replace(".", ",") : props.price+",00"}</p>
    </div>
  </div>
);