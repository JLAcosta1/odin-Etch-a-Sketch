let rainbow = false;

let container = document.querySelector('body');
let div = document.createElement('div');

div.setAttribute('id', 'grid');

container.appendChild(div);

function removeGridContents() {
    let rows = document.querySelectorAll('.row');

    rows.forEach(row => {
        row.parentNode.removeChild(row);
    })
}

function buildRows (x=16) {
    container = document.querySelector('#grid');
    for (i = 0; i < x; i ++) {
        div = document.createElement('div');
        div.setAttribute('class', 'row');

        container.appendChild(div);
    }
}

function buildSquares (x = 16) {
    let rows = document.querySelectorAll('.row');

    rows.forEach(row => {
        for (i = 0; i < x; i ++) {
            div = document.createElement('div');
            div.setAttribute('class', 'square');

            if (x == 1) {
                div.setAttribute('class', 'square top first bottom last')
            }

            else if (rows[0] === row) {
                div.setAttribute('class', 'square top');

                if (i == 0) {
                    div.setAttribute('class', 'square top first');
                }
        
                if (i == x-1) {
                    div.setAttribute('class', 'square top last');
                }
            }

            else if (rows[x-1] === row) {
                div.setAttribute('class', 'square bottom');

                if (i == 0) {
                    div.setAttribute('class', 'square bottom first');
                }
        
                if (i == x-1) {
                    div.setAttribute('class', 'square bottom last');
                }
            }

            else if (i == 0) {
                div.setAttribute('class', 'square first');
            }
    
            else if (i == x-1) {
                div.setAttribute('class', 'square last');
            }

            row.appendChild(div);
        }
    })
}

function newColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    const randomColorString = "#" + randomColor
    
    return randomColorString;
}

function changeBackgroundColor () {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        if (rainbow == true) {
            square.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = newColor();
            });
        }
        else {
            square.addEventListener('mouseover', (e) => {
                e.target.style.backgroundColor = 'black';
            });
        }
    });
}

function setBoolean() {

    console.log('hello');
    if (rainbow == false) {
        rainbow = true
    }
    else {
        rainbow = false
    }
    console.log(rainbow)
    changeBackgroundColor();
}

rainbowButton.addEventListener("click", setBoolean, changeBackgroundColor);

buildRows();
buildSquares();
changeBackgroundColor();

var slider = document.getElementById("Range");
var output1 = document.getElementById("output1");
var output2 = document.getElementById("output2");
output1.innerHTML = slider.value;
output2.innerHTML = slider.value;

slider.oninput = function() {
    output1.innerHTML = this.value;
    output2.innerHTML = this.value;
    removeGridContents()
    buildRows(this.value)
    buildSquares(this.value);
    changeBackgroundColor();
}
