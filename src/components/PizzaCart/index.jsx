// COMPONENTs
import Carousel from "../Carousel";
import Button from "../Button";

export default props => (
  <div className="PizzaCart">
    <div className="PizzaCart__left">
      <Carousel 
        data={props.images} 
        speed={2000}
      />
    </div>

    <div className="PizzaCart__right">
      <h3>{props.title}</h3>
      <h4>{props.subtitle}</h4>
      <div className="PizzaCart__right--flavors">
        { (props.flavors && props.flavors.length > 0) &&
          props.flavors.map((element, index) => (
            <p key={index}>{element.name}</p>
          ))
        }
      </div>
      <div className="PizzaCart__right--actions">
        <Button onClick={props.onEdit}>Editar</Button>
        <Button onClick={props.onDel}>Deletar</Button>
        <p>R$ {parseFloat(props.price || 0).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
      </div>
    </div>
  </div>
);