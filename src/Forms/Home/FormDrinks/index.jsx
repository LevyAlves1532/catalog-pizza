// COMPONENTs
import Button from "../../../components/Button";
import CardDrink from "../../../components/CardDrink";

// ICONs
import { FiShoppingCart } from "react-icons/fi";

export default props => (
  <div className="FormDrinks">
    <div className="FormDrinks__list">
      { (props.data && props.data.length > 0) &&
        props.data.map((element, index) => (
          <CardDrink 
            className={props.drinksActive.find(item => item.name === element.name) !== undefined ? "active" : ""}
            onClick={() => props.onSelect(element)}
            src={element.img}
            title={element.name}
            price={element.price}
            key={index}
          />
        ))
      }
    </div>

    <div className="FormDrinks__total">
      <h2>R$ {parseFloat(props.total).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</h2>
    </div>
  </div>
);