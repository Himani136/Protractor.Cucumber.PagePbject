import { browser } from "protractor";
import { NewsPageObject } from "../pages/vnExpressPage";
import { until } from "selenium-webdriver";


const { Given, When, Then } = require("cucumber");
// const chai = require("chai").use(require("chai-as-promised"));
// const expect = chai.expect;
const vne: NewsPageObject = new NewsPageObject();

var { setDefaultTimeout } = require('cucumber');

setDefaultTimeout(60 * 1000);


Given('I am on {string} page', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  if (string === "vnexpress") {
    await console.log('Success!');
  }

});

When('I click on {string} button', async function (string) {
  // Write code here that turns the phrase above into concrete actions
  //browser.sleep(3000);
  if (string === "English") {
    await vne.englishBtn.click();
    //browser.sleep(5000);
    console.log("click on Video Button on VNExpress page");

  }

});

Then('I view the page', function () {
  // Write code here that turns the phrase above into concrete actions

});