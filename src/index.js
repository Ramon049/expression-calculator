function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let str = expr.split(' ').filter(x => x != '');
    let res = [];
    let stack = [];
    let number = 0;

    if(expr[0] != ' '){
        str =  expr.split('').filter(x => x != ' ');
        let leftBracket = expr.split('').filter(x => x == '(');
        let rightBracket = expr.split('').filter(x => x == ')');
        if(leftBracket.length != rightBracket.length){
            throw new Error("ExpressionError: Brackets must be paired")
        }
    }
    
    
    

    for (let i = 0; i < str.length; i++) {
        if(!isNaN(+str[i])) {
            res.push(str[i]);
        }

        if(str[i] == '*'){
            if(stack[stack.length - 1] == '*'){
                let firstNumber = res[res.length - 2];
                let secondNumber = res[res.length - 1];
                number = firstNumber * secondNumber;
                res.splice(res.length - 2, 2, number);
                continue;
            }
            if(stack[stack.length - 1] == '/'){
                let firstNumber = res[res.length - 2];
                let secondNumber = res[res.length - 1];
                if(secondNumber == 0){
                    throw new Error("TypeError: Division by zero.")
                }
                number = firstNumber / secondNumber;
                res.splice(res.length - 2, 2, number);
                stack.pop();
                stack.push(str[i]);
                continue;
             }
             if(stack.length == 0 || stack[stack.length - 1] == '+' || stack[stack.length - 1] == '-' || stack[stack.length - 1] == '('){
                stack.push(str[i]);
                continue;
            }
        }   
        
        if(str[i] == '/'){
            if(stack[stack.length - 1] == '/'){
                let firstNumber = res[res.length - 2];
                let secondNumber = res[res.length - 1];
                if(secondNumber == 0){
                    throw new Error("TypeError: Division by zero.")
                }
                number = firstNumber / secondNumber;
                res.splice(res.length - 2, 2, number);
                continue;
            }
            if(stack[stack.length - 1] == '*'){
                let firstNumber = res[res.length - 2];
                let secondNumber = res[res.length - 1];
                number = firstNumber * secondNumber;
                res.splice(res.length - 2, 2, number);
                stack.pop();
                stack.push(str[i]);
                continue;
             }
             if(stack.length == 0 || stack[stack.length - 1] == '+' || stack[stack.length - 1] == '-' || stack[stack.length - 1] == '('){
                stack.push(str[i]);
                continue;
            }
        } 

        if(str[i] == '+'){
            if(stack[stack.length - 1] == '+'){
                let firstNumber = res[res.length - 2];
                let secondNumber = res[res.length - 1];
                number = +firstNumber + +secondNumber;
                res.splice(res.length - 2, 2, number);
                continue;
            }
            if(stack[stack.length - 1] == '-'){
                let firstNumber = res[res.length - 2];
                let secondNumber = res[res.length - 1];
                number = firstNumber - secondNumber;
                res.splice(res.length - 2, 2, number);
                stack.pop();
                stack.push(str[i]);
                continue;
             }
             if(stack[stack.length - 1] == '*'){
                let firstNumber = res[res.length - 2];
                let secondNumber = res[res.length - 1];
                number = firstNumber * secondNumber;
                res.splice(res.length - 2, 2, number);
                stack.pop();
                stack.push(str[i]);
                continue;
            }
            if(stack[stack.length - 1] == '/'){
                let firstNumber = res[res.length - 2];
                let secondNumber = res[res.length - 1];
                if(secondNumber == 0){
                    throw new Error("TypeError: Division by zero.")
                }
                number = firstNumber / secondNumber;
                res.splice(res.length - 2, 2, number);
                stack.pop();
                stack.push(str[i]);
                continue;
             }
             if(stack.length == 0 || stack[stack.length - 1] == '('){
                stack.push(str[i]);
                continue;
            }
        } 

        if(str[i] == '-'){
            if(stack[stack.length - 1] == '-'){
                let firstNumber = res[res.length - 2];
                let secondNumber = res[res.length - 1];
                number = firstNumber - secondNumber;
                res.splice(res.length - 2, 2, number);
                continue;
            }
            if(stack[stack.length - 1] == '+'){
                let firstNumber = res[res.length - 2];
                let secondNumber = res[res.length - 1];
                number = +firstNumber + +secondNumber;
                res.splice(res.length - 2, 2, number);
                stack.pop();
                stack.push(str[i]);
                continue;
             }
             if(stack[stack.length - 1] == '*'){
                let firstNumber = res[res.length - 2];
                let secondNumber = res[res.length - 1];
                number = firstNumber * secondNumber;
                res.splice(res.length - 2, 2, number);
                stack.pop();
                stack.push(str[i]);
                continue;
            }
            if(stack[stack.length - 1] == '/'){
                let firstNumber = res[res.length - 2];
                let secondNumber = res[res.length - 1];
                if(secondNumber == 0){
                    throw new Error("TypeError: Division by zero.")
                }
                number = firstNumber / secondNumber;
                res.splice(res.length - 2, 2, number);
                stack.pop();
                stack.push(str[i]);
                continue;
             }
             if(stack.length == 0 || stack[stack.length - 1] == '('){
                stack.push(str[i]);
                continue;
            }
        } 

        if (str[i] == '(') {
            stack.push(str[i]);
        }

        if(str[i] == ')') {
            for(let j = 0; j < 100; j++){
                if(stack[stack.length - 1] == '+'){
                    let firstNumber = res[res.length - 2];
                    let secondNumber = res[res.length - 1];
                    number = +firstNumber + +secondNumber;
                    res.splice(res.length - 2, 2, number);
                    stack.pop();
                    continue;
                }

                if(stack[stack.length - 1] == '-'){
                    let firstNumber = res[res.length - 2];
                    let secondNumber = res[res.length - 1];
                    number = firstNumber - secondNumber;
                    res.splice(res.length - 2, 2, number);
                    stack.pop();
                    continue;
                }

                if(stack[stack.length - 1] == '*'){
                    let firstNumber = res[res.length - 2];
                    let secondNumber = res[res.length - 1];
                    number = firstNumber * secondNumber;
                    res.splice(res.length - 2, 2, number);
                    stack.pop();
                    continue;
                }

                if(stack[stack.length - 1] == '/'){
                    let firstNumber = res[res.length - 2];
                    let secondNumber = res[res.length - 1];
                    if(secondNumber == 0){
                        throw new Error("TypeError: Division by zero.")
                    }
                    number = firstNumber / secondNumber;
                    res.splice(res.length - 2, 2, number);
                    stack.pop();
                    continue;
                 }

                 if(stack[stack.length - 1] == '('){
                    stack.pop();
                    j = 100;
                }
            }
        }

        if(i == str.length - 1 ){
            for(let k = 0; k < 100; k++){
                if(stack.length == 0){
                    k = 100;
                    continue;
                }
                if(stack[stack.length - 1] == '+'){
                    let firstNumber = res[res.length - 2];
                    let secondNumber = res[res.length - 1];
                    number = +firstNumber + +secondNumber;
                    res.splice(res.length - 2, 2, number);
                    stack.pop();
                    continue;
                }

                if(stack[stack.length - 1] == '-'){
                    let firstNumber = res[res.length - 2];
                    let secondNumber = res[res.length - 1];
                    number = firstNumber - secondNumber;
                    res.splice(res.length - 2, 2, number);
                    stack.pop();
                    continue;
                }

                if(stack[stack.length - 1] == '*'){
                    let firstNumber = res[res.length - 2];
                    let secondNumber = res[res.length - 1];
                    number = firstNumber * secondNumber;
                    res.splice(res.length - 2, 2, number);
                    stack.pop();
                    continue;
                }

                if(stack[stack.length - 1] == '/'){
                    let firstNumber = res[res.length - 2];
                    let secondNumber = res[res.length - 1];
                    if(secondNumber == 0){
                        throw new Error("TypeError: Division by zero.")
                    }
                    number = firstNumber / secondNumber;
                    res.splice(res.length - 2, 2, number);
                    stack.pop();
                    continue;
                 }
            }
        }
    }
    
return number;
       
}

module.exports = {
    expressionCalculator
}