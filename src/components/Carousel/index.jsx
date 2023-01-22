// LIBs
import { useState, useEffect } from "react";

// SERVICEs
import { cn } from "../../core/services/helper";

export default props => {
  const [ slide, setSlide ] = useState(0);

  useEffect(() => {
    if (props.data && props.data.length > 0) {
      const interval = setInterval(() => {
        setSlide(current => (current + 1) < props.data.length ? current + 1 : 0);
      }, props.speed || 1000);
      return () => clearInterval(interval);
    }
  }, [])

  return (
    <div className={cn("Carousel", props.className)}>
      { (props.data && props.data.length > 0) &&
        <img src={props.data[slide]} alt="" />
      }
    </div>
  )
}