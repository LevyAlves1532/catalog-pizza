// LIBs
import React from "react";

const MainDefault = props => {
  return (
    <div className={`Main ${props.mode}`}>
      <div className="Main__container">
        {React.cloneElement(props.children, { ...props })}
      </div>
    </div>
  );
}

export default MainDefault;