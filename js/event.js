function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// handle blue button
const blueButton = document.getElementById('make-blue-button');
        blueButton.onclick = makeBlue;

        function makeBlue() {
            document.body.style.backgroundColor = 'blue';
        }

// handle event using anonymous function
const greenButton = document.getElementById('make-green-button');
        greenButton.onclick = function () {
            document.body.style.backgroundColor = 'green';
        }

// handle eventlistener
const goldenButton = document.getElementById('make-golden');
        goldenButton.addEventListener('click', makeGold)
        function makeGold(){
            document.body.style.backgroundColor = 'goldenrod';
        }

// add EventListener
const pinkButton = document.getElementById('make-hot-pink');
pinkButton.addEventListener('click', function makePink(){
    document.body.style.backgroundColor = 'hotpink';
})

// direct shortcut
document.getElementById('make-lightblue').addEventListener('click', function(){
    document.body.style.backgroundColor = 'lightblue';
})