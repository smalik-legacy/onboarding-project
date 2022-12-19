const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://www.qa-legacy.com/us/obituaries/chicagotribune/name/virginia-gruchalski-obituary?pid=196167379',
      browser: 'chrome'
    }
  },
  include: {
    "I": "./steps_file.js",
    "guestbookPage": "./pages/guestbook.js"
  },
  // in codecept.conf.js
  // plugins: {
  //   customLocator: {
  //     enabled: true,
  //     attribute: 'data-component',
  //     prefix: '=',
  //     type: 'css'
  //   }
  // },
  name: 'onboarding-project'
}