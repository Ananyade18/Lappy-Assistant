const puppeteer =  require("puppeteer");
let cPage;
let browserPromise=puppeteer.launch({
    headless:false
});
browserPromise.then(function(browser)
{
  let pagesPromise=browser.pages();
  return pagesPromise;
    
}).then(function(pagesArr)
{  cPage=pagesArr[0];
    let googlePagePromise=cPage.goto("https://www.google.com");
    return googlePagePromise;
}).then(function (){
    let waitForSelector=cPage.waitForSelector("input[type='text']",{visible:true});
    return waitForSelector;
}).then(function (){
    return cPage.type("input[type='text']","hackerearth");
}).then(function (){
    return cPage.keyboard.press("Enter");
}).then(function (){
    return cPage.waitForSelector(".yuRUbf h3", {visible:true});
}).then(function (){
    return cPage.click(".yuRUbf h3");
})


