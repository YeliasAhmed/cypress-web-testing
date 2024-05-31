import LoginPage from "../pages/LoginPage";

    describe('Login Functionality', () => {
        beforeEach(() => {
            LoginPage.visit();
        });
    
        it('Successfully logs in with valid credentials', () => {
            LoginPage.fillUsername('Admin');
            LoginPage.fillPassword('admin123');
            LoginPage.submit();
        
        });
});