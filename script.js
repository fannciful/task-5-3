const userNumberInput = prompt('Введи ціле число N');

if (userNumberInput === null){
    alert('You canceled1');
}
else if (!userNumberInput.trim()) {
    alert('You have entered nothing!');
}
else if (isNaN(userNumberInput)) {
    alert('You entered not a number!');
}
else{
    const wholePositiveNumber = Math.abs(parseInt(userNumberInput));

    let i;
    let result = '';

    for (i = 1; i <= 100; i++){
        let squareNumber = i * i;
        if (squareNumber <= wholePositiveNumber) {
            if (result !== '') {
                result += ', ';
            }
            result += i;
        }
        else {
            break;
        }
    }
    
    alert(`Цілі числа від 1 до 100, квадрат яких не перевищує введеного числа:\n${result}`); 
}
