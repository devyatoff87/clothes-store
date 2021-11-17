import CheckoutHeader from "./checkout-header/CheckoutHeader_comp";
import CheckoutList from "./checkout-list/CheckoutList_comp";

import React from "react";
import CheckoutFooter from "./checkout-footer/checkoutFooter";

const IndexCheckout = () => {
  return (
    <>
      <CheckoutHeader />
      <CheckoutList />
      <CheckoutFooter />
    </>
  );
};

export default IndexCheckout;
