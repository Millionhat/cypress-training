class ProductListPage {
    private addShirtCart: string;

    private proceedToCart: string;

    constructor() {
      this.addShirtCart = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
      this.proceedToCart = "[style*=\"display: block;\"] .button-container > a";
    }

    public selectShirt(): void {
      cy.get(this.addShirtCart).click();
    }

    public proceedToOrder(): void {
      cy.get(this.proceedToCart).click();
    }
}
export { ProductListPage };
