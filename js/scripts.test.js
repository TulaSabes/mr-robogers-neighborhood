import robotOutput from "./script"
///const robotOutput = require("./script");
describe("robotOutput",()=>{
   /* beforeEach(()=>{
    window.$ = require('./jquery-3.6.0');  
    })
    */
    test('It should return a string with a 0 if the number 0 is imputted', () => {
        expect(robotOutput(0)).toBe("0");       
  });
  test('It should return a string with a 0 if the number 0 is imputted', () => {
    expect(robotOutput(0)).toBe("0"); 
  });
})