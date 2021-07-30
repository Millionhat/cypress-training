class PaymentStepPage {
    private selectPayment: string;

    private proceedToSummary: string;

    constructor() {
      this.selectPayment = ".payment_module .bankwire span";
      this.proceedToSummary = ".cart_navigation span";
    }

    public paymentSelection(): void {
      cy.get(this.selectPayment).click();
    }

    public proceedToNextPage(): void {
      cy.get(this.proceedToSummary).click();
    }
}
export { PaymentStepPage };
