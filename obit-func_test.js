Feature('obit-func');



Scenario('Should open the page, assert that the descendants first name appears in the Name section, Scroll down until the Guest Book is visible, Leave a Guest Book entry',  ({ I }) => {
       //Opens the Page
        I.amOnPage('https://www.qa-legacy.com/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379'); // opens main page of website
        //find Virginia(the first name of the descendant) -- I might have to assert differently here?
        I.see('Virginia', { css: '[data-component=NameSection]'})
        //Fill the guest book message field:
        I.fillField({name: '_GuestbookForm_Message'}, 'testing this function to see if this works')
       
        //FOR THE PHOTO UPLOADING SECTION oF THE OBIT MESSAGE:
        // I.click('')    click the add the photo
        // await I.appendFile()     placing a file in the popout modal
       
        //Fill in the name field
        I.fillField({name: '_GuestbookForm_From'}, 'John Doe')
        //Fill in the email field
        I.fillField({name: '_GuestbookForm_Email'}, 'jdoe@test.com')
        //click the submit button to succesfully leave a guest book entry
        I.click({ css: '[data-component=GuestbookSubmitButton]'})
});
