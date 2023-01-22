// COMPONENTs
import CardSize from "../../../components/CardSize";
import Button from "../../../components/Button";

// ICONs
import { FiChevronRight } from "react-icons/fi";

export default props => (
  <div className="FormSize">
    <div className="FormSize__list">
      { (props.data && props.data.length > 0) &&
        props.data.map((element, index) => (
          <CardSize 
            className={element.size === props.sizeActive.size ? "active" : ""}
            logo={element.size} 
            title={element.name} 
            flavors={element.qtdFlavors} 
            price={element.price} 
            onClick={() => props.onSelect(element)}
            key={index}
          />
        ))
      }
    </div>

    <div className="FormSize__actions">
      <Button
        className={!props.sizeActive.size ? "blocked" : ""}
        onClick={() => !props.sizeActive.size ? null : props.onNext("Sabores")}
      >
        Selecionar Sabores 
        <FiChevronRight />
      </Button>
    </div>
  </div>
);