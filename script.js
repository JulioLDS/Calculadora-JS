function addCaracter(caracter){
    const valueInput = document.querySelector('.display');
    
    document.querySelector('.display').value = valueInput.value + caracter
}

function limpar(){
    document.querySelector('.display').value = ''
}

function calcular(){
    const valueInput = document.querySelector('.display');

    document.querySelector('.display').value = eval(valueInput.value)
}

function inverter(){
    const valueInput = document.querySelector('.display');
    document.querySelector('.display').value = valueInput.value * -1
}