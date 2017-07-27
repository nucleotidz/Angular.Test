describe('angularjs homepage title check', function () {
    it('should have a title', function () {       
        browser.get('https://signalrui.azurewebsites.net/#/');
        expect(browser.getTitle()).toEqual('Signal R');
    });
});
describe('Click Button', function () {
    it('should have a button', function () {
        var addButton = element(by.css('[value="Create"]')); 
        addButton.click();        
        expect(element(by.css('[id="Name"]')).isPresent()).toBe(true);
    });
});
describe('Submit Button', function () {
    it('Form should be Filled', function () {
   
        element(by.model('vm.AccountModel.Name')).sendKeys("Ahmar Husain");
        element(by.model('vm.AccountModel.AccountNumber')).sendKeys("426124612");      
        element(by.model('vm.AccountModel.Amount')).sendKeys("9000");
        element(by.css('[class="btn btn-default"]')).click(); 
        browser.driver.sleep(4000);
        element(by.css('[class="btn btn-primary"]')).click();
        browser.driver.sleep(4000);
        expect(element(by.css('[value="Delete"]')).isDisplayed()).toBeTruthy();       
    });    
});
describe('Delete Button', function () {
    it('Data Should Be deleted', function () {   
        element(by.css('[value="Delete"]')).click();
        browser.driver.sleep(4000);
        expect(element(by.css('[value="Delete"]')).isPresent()).toBe(false);
        browser.pause();
    });
});
