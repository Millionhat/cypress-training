import {
  // eslint-disable-next-line max-len
  MenuContentPage, ProductListPage, ShoppingCartPage, LoginPage, AddressStepPage, ShippingStepPage, PaymentStepPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const adressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();
    productListPage.selectShirt();
    productListPage.proceedToOrder();

    shoppingCartPage.proceedToLogin();
    loginPage.fillInfo();
    loginPage.submitLoginInfo();

    adressStepPage.proceedToShipping();

    shippingStepPage.clickTerms();
    shippingStepPage.proceedToNextPage();

    paymentStepPage.paymentSelection();
    paymentStepPage.proceedToNextPage();

    cy.get("#center_column > div > p > strong")
      .should("have.text", "Your order on My Store is complete.");
  });
});
