
const items = document.getElementsByClassName('item');
const title = document.querySelector('p');
let turn = 'X';
let moves = 0;

for (let i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function clickevent() {
    if (this.innerHTML === '') {
      this.innerHTML = turn;
      moves++;
      checkWinning();
      switchTurn();
      checkDraw();
    }
  });
}

function switchTurn() {
  turn = turn === 'X' ? 'O' : 'X';
  title.innerHTML = `Turn => ${turn}`;
}

function win(num1, num2, num3) {
  items[num1].style.backgroundColor = 'black';
  items[num2].style.backgroundColor = 'black';
  items[num3].style.backgroundColor = 'black';
  title.innerHTML = `Player ${turn} wins!`;
  handleItemClick();
}

function draw() {
  title.innerHTML = 'It\'s a draw!';
  handleItemClick();
}

function handleItemClick() {
    
   setTimeout(function() {
       title.innerHTML += '.'
   },1000)
   setInterval(function() {
       location.reload()
   }, 3000)
    
}

function checkWinning() {
  // row win
  if (
    items[0].innerHTML === items[1].innerHTML &&
    items[1].innerHTML === items[2].innerHTML &&
    items[1].innerHTML !== ''
  ) {
    win(0, 1, 2);
  } else if (
    items[3].innerHTML === items[4].innerHTML &&
    items[4].innerHTML === items[5].innerHTML &&
    items[4].innerHTML !== ''
  ) {
    win(3, 4, 5);
  } else if (
    items[6].innerHTML === items[7].innerHTML &&
    items[7].innerHTML === items[8].innerHTML &&
    items[7].innerHTML !== ''
  ) {
    win(6, 7, 8);
  }
  // column win
  else if (
    items[0].innerHTML === items[3].innerHTML &&
    items[3].innerHTML === items[6].innerHTML &&
    items[3].innerHTML !== ''
  ) {
    win(0, 3, 6);
  } else if (
    items[1].innerHTML === items[4].innerHTML &&
    items[4].innerHTML === items[7].innerHTML &&
    items[4].innerHTML !== ''
  ) {
    win(1, 4, 7);
  } else if (
    items[2].innerHTML === items[5].innerHTML &&
    items[5].innerHTML === items[8].innerHTML &&
    items[5].innerHTML !== ''
  ) {
    win(2, 5, 8);
  }
  // diagonal
  else if (
    items[0].innerHTML === items[4].innerHTML &&
    items[4].innerHTML === items[8].innerHTML &&
    items[4].innerHTML !== ''
  ) {
    win(0, 4, 8);
  } else if (
    items[2].innerHTML === items[4].innerHTML &&
    items[4].innerHTML === items[6].innerHTML &&
    items[6].innerHTML !== ''
  ) {
    win(2, 4, 6);
  }
}

function checkDraw() {
  if (moves === 9) {
    draw();
  }
}
