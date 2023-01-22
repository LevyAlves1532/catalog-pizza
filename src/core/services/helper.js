// LIBs
import { toast } from "react-toastify";

export function cn(className, propClassName) {
  if (propClassName) {
    return `${className} ${propClassName}`;
  } else {
    return className;
  }
}

export function payload(type, res) {
  return {
    type: type,
    payload: res,
  };
}

export function Alert(type, msg) {
  toast[type](msg, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  })
}