// LIBs
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useNavigate } from "react-router-dom";

// COMPONENTs
import Title from "../../components/Title";
import Button from "../../components/Button";

// CONTAINERs
import ListProducts from "../../Containers/Cart/ListProducts";

// SELECTORs
import { totalCart, pizzasCart, drinksCart } from "../../core/reducers/CartReducer/selectors";

// ACTIONs
import { deletePizzaCart, toggleDrinkCart } from "../../core/reducers/CartReducer/actions";
import { setPizza } from "../../core/reducers/PizzaReducer/actions";

// ICONs
import { FaWhatsapp } from "react-icons/fa";

const names = {
  name: "Tamanho",
  qtdFlavors: "Quantidade de Sabores",
  price: "Preço",
  flavors: "Sabores",
};

const CartView = props => {
  const navigate = useNavigate();

  function editPizza(pizza) {
    props.setPizza(pizza);
    navigate("/");
  }

  function endRequest() {
    let templateString = ``;

    if (props.pizzas.length > 0) {
      templateString = `*Quero pizza${props.pizzas.length > 1 ? "s" : ""} de:*`;
      props.pizzas.forEach(item => {
        let keys = Object.keys(item);
        templateString += `\n\r`;
        keys.forEach(key => {
          if (names[key] !== undefined) {
            if (key !== "flavors" && key !== "price") {
              templateString += `\n\r *${names[key]}:* ${item[key]}`;
            } else if(key === "flavors") {
              let flavorsName = item[key].map(flavor => flavor.name);
              templateString += `\n\r *${names[key]}:* ${flavorsName.join(", ")}`;
            } else if(key === "price") {
              templateString += `\n\r *${names[key]}:* R$ ${sumPizza(item).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;
            }
          }
        })
      })
      if (props.drinks.length > 0) {
        templateString += `\n\r \n\r *Já bebidas eu quero:*`;
        props.drinks.forEach(item => {
          templateString += `\n\r \n\r *${item.name}*`;
          templateString += `\n\r R$ ${parseFloat(item.price).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;
        })
      }
      templateString += `\n\r \n\r *Total:* R$ ${parseFloat(props.total).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`;
      
      window.open(`https://api.whatsapp.com/send/?phone=554791966719&text=${encodeURI(templateString)}`, "_blank");
    }
  }

  function sumPizza(pizza) {
    let newTotal = pizza.price;
    let flavorsPrice = pizza.flavors.map(item => item.price);
    flavorsPrice = flavorsPrice.reduce((a, b) => a + b);
    newTotal += flavorsPrice;
    return parseFloat(newTotal);
  }

  return (
    <main className="CartView">
      <div className="CartView__title">
        <Title>Carrinho ({props.pizzas.length + props.drinks.length})</Title>
      </div>

      <div className="CartView__list">
        <ListProducts 
          pizzas={props.pizzas} 
          drinks={props.drinks} 
          onEditPizza={(pizza) => editPizza(pizza)}
          onDelPizza={(pizza) => props.deletePizzaCart(pizza)}
          onDelDrink={(drink) => props.toggleDrinkCart(drink)}
        />
      </div>

      <div className="CartView__actions">
        <Button type="link" to="/">
          { (props.pizzas.length === 0 && props.drinks.length === 0) ? 
              "Fazer Primeiro Pedido" 
            : 
              "Fazer Mais um Pedido"
          }
        </Button>
        <Button onClick={endRequest}>
          <FaWhatsapp />
          Finalizar Pedido 
          { (props.pizzas.length > 1 && props.drinks.length === 0) && "s" }
          { (props.pizzas.length === 0 && props.drinks.length > 1) && "s" }
          { (props.pizzas.length > 0 && props.drinks.length > 0) && "s" }
        </Button>
        <div className="CartView__actions--value">
          <h2>Total:</h2>
          <h3>R$ {parseFloat(props.total).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</h3>
        </div>
      </div>
    </main>
  );
}

const mapStateToProps = state => ({
  total: totalCart(state),
  pizzas: pizzasCart(state),
  drinks: drinksCart(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  deletePizzaCart,
  toggleDrinkCart,
  setPizza,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CartView);