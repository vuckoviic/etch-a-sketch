const container = document.querySelector('container');

const sizeBtn = document.getElementById('size');
sizeBtn.addEventListener('click' , function() {
    let layout = prompt('Enter the lenght of one side of your sketchpad:');
    console.log(layout);
});