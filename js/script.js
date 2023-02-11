// Завдання 1

// function count(expression){
//     function getValues(expression){
//         let values = [...expression]
//         return values;
//     }
    
//         let values = getValues(expression);
//         switch (values[1]) {
//       case '+': 
//        return  showResult(sum(values));
//       case '-':
//        return  showResult(subtract(values));
//       case '*':
//        return  showResult(multiply(values));
//       case '/':
//        return showResult(divide(values))
//    }
//    function showResult(value){
//        return value
//    }
// }

// function sum(values) {
//     return +values[0] + +values[2];
// }
// function subtract(values) {
//     return values[0] - values[2];
// }
// function multiply(values) {
//     return values[0] * values[2];
// }
// function divide(values) {
//     return values[0] / values[2];
// }


// Завдання 2

function count(expression){
    function getValues(expression){
        let values = [...expression]
        return values;
    }
    
        let values = getValues(expression);
        switch (values[1]) {
      case '+': 
       return  showResult(sum(values));
      case '-':
       return  showResult(subtract(values));
      case '*':
       return  showResult(multiply(values));
      case '/':
       return showResult(divide(values))
   }
   function showResult(value){
       return value
   }
}

function sum(values) {
    return +values[0] + +values[2];
}
function subtract(values) {
    return values[0] - values[2];
}
function multiply(values) {
    return values[0] * values[2];
}
function divide(values) {
    try{
        if(values[0] / values[2] === Infinity){
            throw new Error('Cant divide by 0')
        }else {
           console.log(values[0] / values[2])
        }
    }
    catch(error){
        console.log(error.name+': '+error.message)
        console.log(0)
    } 
    
}

// Завдання 3

// function count(expression){
//     function getValues(expression){
//         let values = [...expression]
//         return values;
//     }
//         let values;
//         try{
//             let data = getValues(expression); //*
//             data = values
//             if(values[1] === undefined){
//                 throw new Error('expression is not iterable')
//             }

//         }catch(error){
//            console.log(error.name +': '+error.message) //** 
//            values = [0, '+' ,0];
//         }

//      switch (values[1]) {
//       case '+': 
//        return  showResult(sum(values));
//       case '-':
//        return  showResult(subtract(values));
//       case '*':
//        return  showResult(multiply(values));
//       case '/':
//        return showResult(divide(values))
//    }
//    function showResult(value){
//        return value
//    }
// }

// function sum(values) {
//     return +values[0] + +values[2];
// }
// function subtract(values) {
//     return values[0] - values[2];
// }
// function multiply(values) {
//     return values[0] * values[2];
// }
// function divide(values) {
//    return values[0] / values[2]
// }

// count(2+5)


// Завдання 4

function MakeUsers(name,age){
    this.name = name;
    this.age = age;
}
let user = new MakeUsers('Mike');//Forgot to pass the second parameter
function showMovie(user){
    try{
        if(user.age === undefined){
            throw new Error('age not determined')
        }
    }
    catch(error){
        alert(error.message)
        user.age = prompt ('enter your age');
        if(!Number(user.age)){
            alert('Error: Enter age')
        }
        else if(user.age >= 18){
            alert('You can watch this movie');
        } else {
            alert('Sorry, you are too young');
        }
        
    }
}
showMovie(user)