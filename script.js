const container = document.querySelector('.container');

const sizeBtn = document.getElementById('size');
sizeBtn.addEventListener('click' , function() {
    let layoutInput = prompt('Enter the lenght of one side of your sketchpad:');
    let layoutNumber = parseFloat(layoutInput);

    for (let i = 0; i <= layoutNumber; i++){
        let square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }

});