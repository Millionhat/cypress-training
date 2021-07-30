class ShippingStepPage {
    private acceptTerms: string;

    private proceedToPayment: string;

    constructor() {
      this.acceptTerms = ".checkbox span";
      this.proceedToPayment = ".cart_navigation span";
    }

    public clickTerms():void {
      cy.get(this.acceptTerms).click();
    }

    public proceedToNextPage(): void {
      cy.get(this.proceedToPayment).click();
    }
}
export { ShippingStepPage };
