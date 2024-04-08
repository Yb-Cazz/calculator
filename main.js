// let addition = document.querySelector('#addition');
// let subtraction = document.querySelector('#subtraction');
// let multiplication = document.querySelector('#multiplication');
// let division = document.querySelector('#division');
let answer = document.querySelector('#answer');
let keys = document.querySelectorAll('#num');
let question = document.querySelector('.question');
let sol = document.querySelector('.solution');
let query = '';
console.log(keys)


keys.forEach(key => {+
    key.addEventListener('click', function enter()
    {
        query = query + key.value;
        console.log(query);
        question.textContent = query
    })
}); 


answer.addEventListener('click', function solution()
{
    try{
        let ans = eval(query);
        console.log(ans)
        sol.textContent = '=' + ans
    }
    
    catch(error)
    {
        console.log(error)  
    }
    
    
})


// num.addEventListener('click', function enter()
// {
//     let ke = document.querySelector('#num').value;
//     console.log(key)
//     // query.push(key);
// })


// addition.addEventListener('click', function add()
// {

// })


// subtraction.addEventListener('click', function subtract()
// {

// })


// multiplication.addEventListener('click', function multiply()
// {

// })


// division.addEventListener('click', function divide()
// {

// })
