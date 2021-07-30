class AddressStepPage {
    private proceedNextPage: string;

    constructor() {
      this.proceedNextPage = ".cart_navigation span";
    }

    public proceedToShipping(): void {
      cy.get(this.proceedNextPage).click();
    }
}
export { AddressStepPage };
