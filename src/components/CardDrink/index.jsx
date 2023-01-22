// COMPONENTs
import Button from "../Button";

// SERVICEs
import { cn } from "../../core/services/helper";

export default props => (
  <div 
    className={cn(`CardDrink${props.type === "cart" ?  " Cart" : ""}`, props.className)} 
    onClick={props.onClick}
  >
    <div className="CardDrink__image">
      <img src={props.src} alt={props.alt || ""} />
    </div>

    <div className="CardDrink__text">
      <h3>{props.title}</h3>
      <p>R$ {parseFloat(props.price).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
    </div>

    { (props.type === "cart") &&
      <div className="CardDrink__button">
        <Button onClick={props.onDel}>Deletar</Button>
      </div>
    }
  </div>
);