import { browser } from "protractor";
import { NewsPageObject } from "../pages/vnExpressPage";
import { timeout } from "q";

const { Given, When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

const vne : NewsPageObject = new NewsPageObject();

Given('I am on {string} page', function (string) {
    // Write code here that turns the phrase above into concrete actions
    if (string === "vnexpress" ){
        console.log('Success!');
    }
   
  });

  When('I click on {string} button', function (string) {
    // Write code here that turns the phrase above into concrete actions
    browser.sleep(3000);
    if (string === "English"){
        vne.englishBtn.click();
        browser.sleep(5000);
        console.log("click on Video Button");
        
    }
       
  });

  Then('I view the page', function () {
    // Write code here that turns the phrase above into concrete actions
    
  });