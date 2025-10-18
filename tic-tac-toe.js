document.addEventListener('DOMContentLoaded', function() {
    const gameBoard = document.getElementById('board');
    const boxes = gameBoard.getElementsByTagName('div');
    
    function setupGrid() {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].classList.add('square');
        }
    }
    
    setupGrid();
});