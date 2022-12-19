const { I } = inject();

module.exports = {

  // setting locators::
  // descendantName: { css: '[data-component=NameSection]'},
  fields: {
    guestbookMessage: { name: '_GuestbookForm_Message' },
    name: { name: '_GuestbookForm_From' },
    email: { name: '_GuestbookForm_Email' }
  },
  submitButton: { css: '[data-component=GuestbookSubmitButton]' },

  // introducing methods
  createGuestBookEntry(message, name, email) {
    I.fillField(this.fields.guestbookMessage, message);
    I.fillField(this.fields.name, name);
    I.fillField(this.fields.email, email);
    I.click(this.submitButton);
  },



}
