let display = document.getElementById('display')
let currentExpression = ''
function appendCharacter(char){
    currentExpression += char
    display.value = currentExpression
}
function clearDisplay(){
    currentExpression = ''
    display.value= ''
}
function deleteChar(){
currentExpression = currentExpression.slice(0,-1)    
display.value= currentExpression;
}
function calculate(){
    try{
        let result = eval(currentExpression)
        display.value = result;
        currentExpression = result.toString()
    }
    catch(error){
        display.value = 'Error'
        currentExpression = ''
        
    }
}