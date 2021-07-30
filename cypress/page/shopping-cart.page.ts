class ShoppingCartPage {
    private proceed : string;

    constructor() {
      this.proceed = ".cart_navigation span";
    }

    public proceedToLogin(): void {
      cy.get(this.proceed).click();
    }
}
export { ShoppingCartPage };
