import { loginLocators } from "../locators/locators";

class LoginPage{

    visit() {
        cy.visit('/index.php/auth/login'); 
    }
      fillUsername(username) {
        cy.get(loginLocators.username).type(username);
      }
    
      fillPassword(password) {
        cy.get(loginLocators.password).type(password);
      }
    
      submit() {
        cy.get(loginLocators.submitButton).click();
      }

}

export default new LoginPage();