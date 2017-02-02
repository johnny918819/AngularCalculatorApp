//make a for loop that cycles everytime the user clicks a number and concatenates that number with the others storing them as one new number when the user clicks one of the operator buttons and then exits the cycle keeping that new concatinated number in memory. Then the operator that was clicked is also stored as part of an equation. Then the another for loop concatinates another user input number ad stores it also. Then when the user presses another operator button another method calculates the concatinated numbers saved using the operator selected and storing the result in an answer variable.

namespace AngularCalculatorApp {
    angular.module(`AngularCalculatorApp`, []);

    class CalculatorController {
        //public userbtn1: number = 1;
        //public userbtn2: number = 2;
        //public userbtn3: number = 3;
        //public userbtn4: number = 4;
        //public userbtn5: number = 5;
        //public userbtn6: number = 6;
        //public userbtn7: number = 7;
        //public userbtn8: number = 8;
        //public userbtn9: number = 9;
        //public userbtn0: number = 0;
        //public userInputDot: any = `.`;
        //public concatenateInputs(input: number[]) {

       
        public userInputOne: number;
        public userInputTwo: number;
        public operator;
        public answer;

        public getUserInputOne() {
            let inputOne = this.userInputOne;
            return inputOne;
        }
        public getUserInputTwo() {
            let inputTwo = this.userInputTwo;
            return inputTwo;
        }
        public getOperator(operation) {
            let operator = operation;
            return operator;
        }
        public calculateEquation(userInputOne, operator, userInputTwo) {
           this.answer = userInputOne+this.operator+this.getUserInputTwo;
            return this.answer;
        }

        //public addition(userInputOne, userInputTwo,) {
        //    let answer:number = userInputOne + userInputTwo;
        //}
        //public subtraction(userInputOne, userInputTwo) {
        //    let answer: number = userInputOne + userInputTwo;
        //}
        //public multiplication(userInputOne, userInputTwo) {
        //    let answer: number = userInputOne + userInputTwo;
        //}
        //public division(userInputOne, userInputTwo) {
        //    let answer: number = userInputOne + userInputTwo;
        //}
    }
    angular.module(`AngularCalculatorApp`, ).controller(`CalculatorController`, CalculatorController);
}