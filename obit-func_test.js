Feature('obit-func');



Scenario('Should open the page, assert that the descendants first name appears in the Name section, Scroll down until the Guest Book is visible, Leave a Guest Book entry',  ({ I }) => {
        I.amOnPage('https://www.qa-legacy.com/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379'); // opens main page of website
        I.see('Virginia')
        pause();

});
