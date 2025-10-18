document.addEventListener('DOMContentLoaded', function() {
    let turn = 'X';
    let cells = ['', '', '', '', '', '', '', '', ''];
    let playing = true;
    
    const gameBoard = document.getElementById('board');
    const boxes = gameBoard.getElementsByTagName('div');
    const msg = document.getElementById('status');
    const resetBtn = document.querySelector('.btn');
    
    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    function setupGrid() {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].classList.add('square');
            boxes[i].addEventListener('click', makeMove);
            boxes[i].addEventListener('mouseover', addHover);
            boxes[i].addEventListener('mouseout', removeHover);
            boxes[i].setAttribute('data-index', i);
        }
    }
    
    function makeMove(event) {
        const sq = event.target;
        const idx = parseInt(sq.getAttribute('data-index'));
        
        if (cells[idx] !== '' || !playing) {
            return;
        }
        
        sq.textContent = turn;
        sq.classList.add(turn);
        cells[idx] = turn;
        
        validateGame();
        
        turn = turn === 'X' ? 'O' : 'X';
    }
    
    function addHover(event) {
        const sq = event.target;
        if (sq.textContent === '' && playing) {
            sq.classList.add('hover');
        }
    }
    
    function removeHover(event) {
        const sq = event.target;
        sq.classList.remove('hover');
    }
    
    function validateGame() {
        let hasWinner = false;
        let winner = '';
        
        for (let i = 0; i < wins.length; i++) {
            const [a, b, c] = wins[i];
            
            if (cells[a] === '' || cells[b] === '' || cells[c] === '') {
                continue;
            }
            
            if (cells[a] === cells[b] && cells[b] === cells[c]) {
                hasWinner = true;
                winner = cells[a];
                break;
            }
        }
        
        if (hasWinner) {
            msg.textContent = `Congratulations! ${winner} is the Winner!`;
            msg.classList.add('you-won');
            playing = false;
            return;
        }
        
        const isDraw = !cells.includes('');
        if (isDraw) {
            msg.textContent = 'Game ended in a draw!';
            playing = false;
            return;
        }
    }
    
    function newGame() {
        playing = true;
        turn = 'X';
        cells = ['', '', '', '', '', '', '', '', ''];
        
        msg.textContent = 'Move your mouse over a square and click to play an X or an O.';
        msg.classList.remove('you-won');
        
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].textContent = '';
            boxes[i].classList.remove('X');
            boxes[i].classList.remove('O');
            boxes[i].classList.remove('hover');
        }
    }
    
    resetBtn.addEventListener('click', newGame);
    
    setupGrid();
});