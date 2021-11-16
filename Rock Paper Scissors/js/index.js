function rockPaperScissor() {

    var player1Roll = Math.floor(Math.random()*3+1); // Generates numbers from 1-3
    var player2Roll = Math.floor(Math.random()*3+1); // Generates numbers from 1-3

    var randomRollImg = "roll" + player1Roll + ".png";
    var randomRollImgSource = "img/" + randomRollImg;
    var player1Img = document.querySelector("img.player1-img");

    player1Img.setAttribute("src", randomRollImgSource);

    var randomRollImg2 = "roll" + player2Roll + ".png";
    var randomRollImgSource2 = "img/" + randomRollImg2;
    var player2Img = document.querySelector("img.player2-img");

    player2Img.setAttribute("src", randomRollImgSource2);

    if (player1Roll === player2Roll) {
        document.querySelector("h2").textContent = "Draw!";
    } else if (player1Roll === 1 && player2Roll === 2) {
        document.querySelector("h2").textContent = "Player 2 wins!";
    } else if (player1Roll === 1 && player2Roll === 3) {
        document.querySelector("h2").textContent = "Player 1 wins!";
    } else if (player1Roll === 2 && player2Roll === 1) {
        document.querySelector("h2").textContent = "Player 1 wins!";
    } else if (player1Roll === 2 && player2Roll === 3) {
        document.querySelector("h2").textContent = "Player 2 wins!"
    } else if (player1Roll === 3 && player2Roll === 2) {
        document.querySelector("h2").textContent = "Player 1 wins!";
    } else if (player1Roll === 3 && player2Roll === 1) {
        document.querySelector("h2").textContent = "Player 2 wins!";
    }   
}