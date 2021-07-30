class LoginPage {
    private username: string;

    private userPos: string;

    private password: string;

    private passPos: string;

    private submitInfo: string;

    constructor() {
      this.userPos = "#email";
      this.username = "aperdomobo@gmail.com";
      this.password = "WorkshopProtractor";
      this.passPos = "#passwd";
      this.submitInfo = "#SubmitLogin";
    }

    public fillInfo(): void {
      cy.get(this.userPos).type(this.username);
      cy.get(this.passPos).type(this.password);
    }

    public submitLoginInfo(): void {
      cy.get(this.submitInfo).click();
    }
}
export { LoginPage };
