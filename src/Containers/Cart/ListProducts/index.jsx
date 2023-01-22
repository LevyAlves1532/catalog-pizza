// COMPONENTs
import PizzaCart from "../../../components/PizzaCart";
import CardDrink from "../../../components/CardDrink";

export default props => (
  <div className="ListProducts">
    <div className="ListProducts__pizzas">
      <h2>Pizzas</h2>

      <div className="ListProducts__pizzas--list">
        { (props.pizzas && props.pizzas.length > 0) &&
          props.pizzas.map((element, index) => {
            let newPrice = element.flavors.map(item => item.price);
            newPrice = newPrice.reduce((a, b) => a + b) + element.price;

            return (
              <PizzaCart 
                title={`Pedido ${parseInt(index+1).toLocaleString("pt-BR", { minimumIntegerDigits: 2 })}`} 
                subtitle={element.name}
                images={element.flavors.map(item => item.img)} 
                flavors={element.flavors}
                price={newPrice}
                onEdit={() => props.onEditPizza(element)}
                onDel={() => props.onDelPizza(element)}
                key={index}
              />
            );
          })
        }
      </div>
    </div>

    <div className="ListProducts__drinks">
      <h2>Bêbidas</h2>

      <div className="ListProducts__drinks--list">
        { (props.drinks && props.drinks.length > 0) &&
          props.drinks.map((element, index) => (
            <CardDrink 
              type="cart"
              src={element.img}
              title={element.name}
              price={element.price}
              onDel={() => props.onDelDrink(element)}
              key={index}
            />
          ))
        }
      </div>
    </div>
  </div>
)