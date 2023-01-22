// SERVICEs
import { cn } from "../../core/services/helper";

export default props => <h1 className={cn("Title", props.className)}>{props.children}</h1>;