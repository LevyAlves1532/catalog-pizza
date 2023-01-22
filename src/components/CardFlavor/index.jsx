// SERVICEs
import { cn } from "../../core/services/helper"

export default props => (
  <div className={cn("CardFlavor", props.className)} onClick={props.onClick}>
    <div className="CardFlavor__left" style={{backgroundImage: `url(${props.src})`}}>
      <div className="CardFlavor__left--background" />
    </div>

    <div className="CardFlavor__right">
      <h3>Sabor {props.title}</h3>
      <p>
        R$ 
        {
          String(props.price).indexOf(".") > -1 ? 
            " "+String(props.price).replace(".", ",") 
          : 
            " "+props.price+",00"
        }
      </p>
    </div>
  </div>
)