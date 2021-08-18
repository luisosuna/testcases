var expect = require('chai').expect;

module.exports = {
    'Unosquare test case': function (browser) {
        let unosquare = browser.page.unosquare();
        let expectedNavElements = ['Careers', 'services', 'practice areas', 'industries', 'our dna', 'articles & events', 'about', 'blog'];
       
        function testNavElements(elements) {
          elements.value.forEach(function (element, index) {
            browser.elementIdText(element.ELEMENT, function(res) {
              expect(res.value).to.equal(expectedNavElements[index]);
            });
          });
        }

        unosquare.navigate();
        browser.elements('css selector', "#navbarSupportedContent > .nav-link", testNavElements);
        unosquare.useXpath().click("//a[@href='/Services']");
        //unosquare.assert.containsText("p", "Founded in 2009");
        unosquare.expect.element('//*[@class="subtitle"]').text.to.contain('AGILE SOFTWARE DEVELOPMENT');
        unosquare.useXpath().click("//a[@href='/PracticeAreas']");
        unosquare.expect.element('//*[@class="subtitle"]').text.to.contain('PARTNER WITH EXPERIENCED SOFTWARE DEVELOPMENT EXPERTS');
        unosquare.useXpath().click("//a[@href='/Industries']");
        unosquare.expect.element('//*[@class="subtitle"]').text.to.contain('OUR EXPERTISE');
        unosquare.waitForElementVisible('//*[@class="header-title"]', 10000);
        //unosquare.expect.elements('//a[@class="link-blue"]').count.to.equal(3);
        unosquare.useXPath().click("//a[@href='/Industries/Bfsi']");
        //unosquare.useXpath().click("//a[@href='/Industries/Bfsi']");
        //unosquare.expect.element('//*[@class="header-title"]').text.to.contain('DIGITAL TRANSFORMATION IN HIGHLY REGULATED INDUSTRIES');

        

    }
}