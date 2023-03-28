class Calculator{
    static addition(array){
        this.result = array.reduce((result,current)=>{
            result += +current;
            return result;
        },0);
        console.log(this.result);
    }
    static multiply(array){
        this.result = array.reduce((result,current)=>{
            result *= +current;
            return result;
        },1);
        console.log(this.result);
    }
    static subtraction(num1,num2){
        this.result = num1 - num2;
        console.log(this.result);
    }
    static division(num1,num2){
        this.result = num1 / num2;
        console.log(this.result);
    }
}

export default Calculator;