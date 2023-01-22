// COMPONENTs
import Button from "../../../components/Button";
import CardFlavor from "../../../components/CardFlavor";

// ICONs
import { FiShoppingCart } from "react-icons/fi";

export default props => (
  <div className="FormFlavors">
    <div className="FormFlavors__top">
      { (props.data && props.data.length > 0) &&
        props.data.map((element, index) => (
          <CardFlavor 
            className={
              props.flavorsActive.find((item, key) => item.name === element.name) !== undefined ? 
                "active" 
              : 
                ""
            }
            src={element.img}
            title={element.name}
            price={element.price}
            onClick={() => props.onSelect(element)}
            key={index}
          />
        ))
      }
    </div>

    <div className="FormFlavors__bottom">
      <div className="FormFlavors__bottom--prices">
        <h2>R$ {parseFloat(props.total).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</h2>
      </div>

      <Button 
        className={props.flavorsActive.length === props.qtdFlavors ? "" : "blocked"}
        onClick={() => 
          props.flavorsActive.length === props.qtdFlavors ? 
            !props.size.id ? 
              props.onCart() 
            : 
              props.onEditCart()
          : 
            null
        }
      >
        { !props.size.id &&
          "Adicionar ao Carrinho "
        }
        { props.size.id &&
          "Editar Carrinho "
        }
        <FiShoppingCart />
      </Button>
    </div>
  </div>
)