export default props => (
  <div className="TabsMenu">
    { (props.data && props.data.length > 0) &&
      props.data.map((element, index) => (
        <button 
          className={`${element.name === props.tabActive ? "active" : ""} ${element.block ? "blocked" : ""}`} 
          onClick={() => element.block ? null : props.onSelect(element)} 
          key={index}
        >
          {element.name}
        </button>
      ))
    }
  </div>
);
