import Icon from "../icon";
import { EmptyCartStyle } from "./EmptyCart.style";

const ElementEmpty = () => {
  return (
    <EmptyCartStyle>
      <Icon imgRoute="empty-icon.png" />
      <span>No product found...</span>
    </EmptyCartStyle>
  );
};

export default ElementEmpty;
