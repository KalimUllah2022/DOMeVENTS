function makeRed() {
    document.body.style.backgroundColor = 'red';
}
// Handle blue button click by setting function name
const blueButton = document.getElementById('makeBlueButton');
// Just set the name of the function
blueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}
// handle using anonymous function
const greenButton = document.getElementById('makeGreenButton');
// anonymous function
greenButton.onclick = function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

//Handle by using add eventListener
const makeGoldenBtn = document.getElementById('makeGoldenRodButton');
makeGoldenBtn.addEventListener('click', makeGoldBtn);

function makeGoldBtn() {
    document.body.style.backgroundColor = '#DAA520'
}
// handle addEventListener
const indigoBtn = document.getElementById('makeIndigoButton');
indigoBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = 'indigo';
});
// Direct shortcut
document.getElementById('makeAquaButton').addEventListener("click", function() {
    document.body.style.backgroundColor = 'aqua';
})