// LIBs
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import { v4 } from "uuid";

// COMPONENTs
import TabMenu from "../../components/TabMenu";
import ButtonCart from "../../components/ButtonCart";
import Title from "../../components/Title";

// FORMs
import FormSize from "../../Forms/Home/FormSize";
import FormFlavors from "../../Forms/Home/FormFlavors";
import FormDrinks from "../../Forms/Home/FormDrinks";

// SERVICEs
import { sizes as sizesData, flavors as flavorsData, drinks as drinksData } from "../../core/services/pizzas";
import { Alert } from "../../core/services/helper";

// SELECTORs
import { totalCart, drinksCart, pizzasCart } from "../../core/reducers/CartReducer/selectors";
import { sizePizza, flavorsPizza } from "../../core/reducers/PizzaReducer/selectors";

// ACTIONs
import { addPizzaCart, changeTotalCart, toggleDrinkCart } from "../../core/reducers/CartReducer/actions";

const initialTabs = [
  { name: "Tamanhos", block: false },
  { name: "Sabores", block: true },
  { name: "Bêbidas", block: false },
];

const HomeView = props => {
  const [ tabSelected, setTabSelected ] = useState("Tamanhos");
  const [ size, setSize ] = useState(props.size);
  const [ flavors, setFlavors ] = useState(props.flavors);
  const [ tabs, setTabs ] = useState(initialTabs);
  const [ total, setTotal ] = useState(0);
  const [ totalDrinks, setTotalDrinks ] = useState(0);

  useEffect(sumTotal, [tabSelected, flavors]);
  useEffect(isFlavorsActive, [size, props.size]);
  useEffect(sumTotalDrinks, [props.drinks]);
 
  // Seleciona uma tab
  function selectTab(tab) {
    if (tabs.find(item => item.name === tab.name)) {
      setTabSelected(tab.name);
    }
  }

  // Seleciona um tamanho de pizza ao mesmo tempo que remove o tamanho selecionado
  function selectSize(sizeParam) {
    let newSize = {};

    if (size !== sizeParam) {
      newSize = sizeParam;
    }

    if (flavors.length > sizeParam.qtdFlavors) {
      setFlavors([]);
    }

    setSize(newSize);
  }

  // Verifica se os sabores já podem ser ativados
  function isFlavorsActive() {
    const newTabs = [ ...tabs ];

    if (!size.size) {
      newTabs[1].block = true;
    }
    
    setTabs(newTabs);
  }

  // Seleciona um sabor ao mesmo tempo que pode remove-lo
  function selectFlavor(flavor) {
    let newFlavors = [ ...flavors ];
    const newSize = size;

    if (newFlavors.find(item => item.name === flavor.name) === undefined) {
      if (newSize.qtdFlavors && newFlavors.length < newSize.qtdFlavors) {
        newFlavors.push(flavor);
      } else {
        Alert("warn", "Quantidade de Sabores Chegou ao Limite!");
      }
    } else {
      newFlavors = newFlavors.filter(item => item.name !== flavor.name);
    }

    setFlavors(newFlavors);
  }

  // Soma o valor total da pizza
  function sumTotal() {
    let newTotal = 0;
    let newFlavors = [ ...flavors ];

    if (size.price) {
      newTotal += size.price;
    }

    if (newFlavors.length > 0) {
      let prices = newFlavors.map((item) => item.price);
      newTotal += prices.reduce((a, b) => a +b);
    }

    setTotal(newTotal);
  }

  function sumTotalDrinks() {
    let newTotal = 0;
    let newDrinks = [ ...props.drinks ];

    if (newDrinks.length > 0) {
      let prices = newDrinks.map((item) => item.price);
      newTotal += prices.reduce((a, b) => a + b);
    }

    setTotalDrinks(newTotal);
  }

  // Libera a próxima tab ao mesmo tempo que te manda até ela
  function nextStep(name) {
    const newTabs = [ ...tabs ];

    newTabs.find(item => item.name === name).block = false;
    
    setTabSelected(name);
    setTabs(newTabs);
  }

  // Adiciona as suas escolhas ao carrinho
  function addCart() {
    if (size.size) {
      let pizza = { ...size, id: v4() };

      if (flavors.length === pizza.qtdFlavors) {
        pizza.flavors = flavors;
        let newTabs = initialTabs;
        
        props.addPizzaCart(pizza);
        props.changeTotalCart(props.total + total);

        setSize({});
        setFlavors([]);
        setTabSelected("Tamanhos");
        setTabs(newTabs);
        setTotal(0);
      }
    }
  }

  return (
    <main className="HomeView">
      <ButtonCart 
        className={(props.pizzas.length + props.drinks.length) > 0 ? "active" : ""} 
        count={props.pizzas.length + props.drinks.length} 
      />
      <div className="HomeView__title">
        <Title>Peça já sua Pizza</Title>
      </div>
      <div className="HomeView__tabMenu">
        <TabMenu 
          size={size}
          tabActive={tabSelected} 
          data={tabs} 
          onSelect={selectTab}
        />
      </div>
      { tabSelected === "Tamanhos" &&
        <div className="HomeView__form">
          <FormSize 
            data={sizesData} 
            onSelect={selectSize} 
            sizeActive={size}
            onNext={nextStep}
          />
        </div>
      }
      { tabSelected === "Sabores" &&
        <div className="HomeView__form">
          <FormFlavors 
            data={flavorsData} 
            onSelect={selectFlavor} 
            size={size}
            qtdFlavors={size.qtdFlavors}
            flavorsActive={flavors}
            total={total}
            onCart={addCart}
          />
        </div>
      }
      { tabSelected === "Bêbidas" &&
        <div className="HomeView__form">
          <FormDrinks 
            data={drinksData}
            onSelect={(drink) => props.toggleDrinkCart(drink)}
            drinksActive={props.drinks}
            total={totalDrinks}
            sizeActive={size}
            qtdFlavors={size.qtdFlavors}
            flavorsActive={flavors}
          />
        </div>
      }
    </main>
  );
}

const mapStateToProps = state => ({
  total: totalCart(state),
  drinks: drinksCart(state),
  pizzas: pizzasCart(state),
  size: sizePizza(state),
  flavors: flavorsPizza(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
  changeTotalCart,
  addPizzaCart,
  toggleDrinkCart,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);