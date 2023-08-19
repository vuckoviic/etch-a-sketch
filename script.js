const container = document.querySelector('.container');
let squares = [];

const sizeBtn = document.getElementById('size');
sizeBtn.addEventListener('click' , function() {
    let layoutInput = prompt('Enter the lenght of one side of your sketchpad:');
    let layoutNumber = parseFloat(layoutInput);

    squares.forEach(square => {
        container.removeChild(square);
    });
    squares = [];

    container.style.gridTemplateColumns = `repeat(${layoutNumber}, 1fr)`; // Set the number of columns in the grid

    for (let i = 0; i <= layoutNumber*layoutNumber-1; i++){

        if (layoutInput > 100){
            alert('Error! You entered too big number!');
            break;
        }

        let square = document.createElement('div');
        square.classList.add('square');

        container.appendChild(square);
        squares.push(square);

        square.style.width = '100%';
        square.style.height = '100%';
        
        square.addEventListener('mouseover' , function(){
            square.classList.remove('square');
            square.classList.add('hover');
        });

        //choosing color
        const draw = document.getElementById('draw');
        draw.addEventListener('click' , function(){
            square.addEventListener('mouseover' , function(){
                square.classList.remove('square');
                square.classList.add('hover');
            })
        })
        
        //choosing erase
        const erase = document.getElementById('erase');
        erase.addEventListener('click' , function(){
            square.addEventListener('mouseover' , function(){
                square.classList.remove('hover');
                square.classList.add('erase');
            });
        });
    
    }
});

