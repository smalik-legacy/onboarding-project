Feature('obit-func');



Scenario('Should open the page, assert that the descendants first name appears in the Name section, Scroll down until the Guest Book is visible, Leave a Guest Book entry',  ({ I }) => {
        I.amOnPage('https://www.qa-legacy.com/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379'); // opens main page of website
        I.see('Virginia')
        I.fillField({name: '_GuestbookForm_Message'}, 'testing this function to see if this works')
       
        //FOR THE PHOTO UPLOADING SECTION oF THE OBIT MESSAGE:
        // I.click('')    click the add the photo
        // await I.appendFile()     placing a file in the popout modal
       
        I.fillField({name: '_GuestbookForm_From'}, 'John Doe')
        I.fillField({name: '_GuestbookForm_Email'}, 'jdoe@test.com')
        I.click({ css: '[data-component=GuestbookSubmitButton]'})
});
