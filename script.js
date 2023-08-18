const container = document.querySelector('.container');

const sizeBtn = document.getElementById('size');
sizeBtn.addEventListener('click' , function() {
    let layoutInput = prompt('Enter the lenght of one side of your sketchpad:');
    let layoutNumber = parseFloat(layoutInput);

    if (layoutInput > 100){
        alert('Error! You entered too big number!')
    }

    for (let i = 0; i <= layoutNumber*layoutNumber-1; i++){
        let square = document.createElement('div');
        square.classList.add('square');

        let squareSize = 700 / layoutNumber;
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        container.appendChild(square);
    }
});