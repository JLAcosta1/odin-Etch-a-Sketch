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
            div.setAttribute('class', 'square')

            row.appendChild(div)
        }
    })



}

buildRows();
buildSquares();