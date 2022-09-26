let container = document.querySelector('body');
let div = document.createElement('div');

div.setAttribute('id', 'grid');

container.appendChild(div);

function buildRows () {
    container = document.querySelector('#grid');
    for (i = 0; i < 16; i ++) {
        div = document.createElement('div');
        div.setAttribute('class', 'row');

        container.appendChild(div);
    }
}

function buildSquares () {
    let rows = document.querySelectorAll('.row');

    rows.forEach(row => {
        for (i = 0; i < 16; i ++) {
            div = document.createElement('div');
            div.setAttribute('class', 'square');

            if (rows[0] === row) {
                div.setAttribute('class', 'square top');

                if (i == 0) {
                    div.setAttribute('class', 'square top first');
                }
        
                if (i == 15) {
                    div.setAttribute('class', 'square top last');
                }
            }

            else if (rows[15] === row) {
                div.setAttribute('class', 'square bottom');

                if (i == 0) {
                    div.setAttribute('class', 'square bottom first');
                }
        
                if (i == 15) {
                    div.setAttribute('class', 'square bottom last');
                }
            }

            else if (i == 0) {
                div.setAttribute('class', 'square first');
            }
    
            else if (i == 15) {
                div.setAttribute('class', 'square last');
            }

            row.appendChild(div);
        }
    })
}


function changeBackgroundColor () {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black';
        });
    });
}

buildRows();
buildSquares();
changeBackgroundColor();