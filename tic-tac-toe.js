document.addEventListener('DOMContentLoaded', function() {
    let turn = 'X';
    let cells = ['', '', '', '', '', '', '', '', ''];
    
    const gameBoard = document.getElementById('board');
    const boxes = gameBoard.getElementsByTagName('div');
    
    function setupGrid() {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].classList.add('square');
            boxes[i].addEventListener('click', makeMove);
            boxes[i].setAttribute('data-index', i);
        }
    }
    
    function makeMove(event) {
        const sq = event.target;
        const idx = parseInt(sq.getAttribute('data-index'));
        
        sq.textContent = turn;
        sq.classList.add(turn);
        cells[idx] = turn;
        
        turn = turn === 'X' ? 'O' : 'X';
    }
    
    setupGrid();
});