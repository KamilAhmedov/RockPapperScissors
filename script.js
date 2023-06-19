const game = () => {
    let playerScore = 0
    let computerScore = 0
    let playerMainScore = localStorage.getItem("playerMainScore")
    let computerMainScore = localStorage.getItem("computerMainScore")
    const playMatch = () => {
        const options = document.querySelectorAll(".options button")
        const playerHand = document.querySelector(".player-hand")
        const computerHand = document.querySelector(".computer-hand")



        const computerOptions = ["Daş" , "Kağız" , "Qayçı"]
        options.forEach(option => {
            option.addEventListener("click" , function(){
                const computerNumber = Math.floor(Math.random() * computerOptions.length)
                const computerChoice = computerOptions[computerNumber]
                
                playerHand.src = `image/${this.textContent}.png`
                computerHand.src = `image/${computerChoice}.png`
                updateText(this.textContent , computerChoice);
            })
        })
    }
    const updateText = (playerChoice , computerChoice) => {
        const winner = document.querySelector(".winner")
        if(playerChoice === computerChoice){
            winner.textContent = "Bərabər";
            return;
        }
        if(playerChoice === "Daş"){
            if(computerChoice ==="Qayçı"){
                winner.textContent = "Oyunçu Qazandı";
                playerScore++;
                updateScore();
                return;
            }else {
                winner.textContent = "Kompüter Qazandı";
                computerScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === "Qayçı"){
            if(computerChoice ==="Kağız"){
                winner.textContent = "Oyunçu Qazandı";
                playerScore++;
                updateScore();
                return;
            }else {
                winner.textContent = "Kompüter Qazandı";
                computerScore++;
                updateScore();
                return;
            }
        }
        if(playerChoice === "Kağız"){
            if(computerChoice ==="Daş"){
                winner.textContent = "Oyunçu Qazandı";
                playerScore++;
                updateScore();
                return;
            }else {
                winner.textContent = "Kompüter Qazandı";
                computerScore++;
                updateScore();
                return;
            }
        }
    }
    const updateScore = () => {
        const plyScore = document.querySelector(".player-score p")
        const cmpScore = document.querySelector(".computer-score p")
        plyScore.textContent = playerScore;
        cmpScore.textContent = computerScore;
        checkScore();
    }
    const checkScore = () => {
        if(playerScore === 5){
            playerMainScore++
            localStorage.setItem("playerMainScore" , playerMainScore)
            finish();
            return
        }
        if(computerScore === 5){
            computerMainScore++
            localStorage.setItem("computerMainScore" , computerMainScore)
            finish();
            return
        }
    }
    const finish = () => {
        const finish = document.querySelector(".card");
        const score = document.querySelector(".score");
        const match = document.querySelector(".match");
        finish.classList.remove("FadeOut")
        score.classList.add("FadeOut")
        match.classList.add("FadeOut")
        updateMainScore();
        updateFinishText();
    }
    const updateMainScore = () => {
        const plyMainScore = document.querySelector(".player-main-score p")
        const cmpMainScore = document.querySelector(".computer-main-score p")
        plyMainScore.textContent = localStorage.getItem("playerMainScore")
        cmpMainScore.textContent = localStorage.getItem("computerMainScore")
    }
    const updateFinishText = () => {
        const finishText = document.querySelector(".card h1")
        if(playerScore === 5){
            finishText.textContent = "Oyunçu Qazandı"
            return
        }
        if(computerScore === 5){
            finishText.textContent = "Kompüter Qazandı"
            return
        }
    }
    const ContinueRestart = () => {
        const Continue = document.querySelector("#continue")
        const Restart = document.querySelector("#restart")
        Continue.addEventListener("click" , function(){
        const finish = document.querySelector(".card")
        const score = document.querySelector(".score")
        const match = document.querySelector(".match")
        const winner = document.querySelector(".winner")
        const playerHand = document.querySelector(".player-hand")
        const computerHand = document.querySelector(".computer-hand")
        playerHand.src = "image/Daş.png"
        computerHand.src = "image/Daş.png"
        winner.textContent = "Seçim Edin";
        finish.classList.add("FadeOut")
        score.classList.remove("FadeOut")
        match.classList.remove("FadeOut")
        playerScore = 0;
        computerScore = 0;
        updateScore();
    })
    Restart.addEventListener("click" , function(){
        const finish = document.querySelector(".card")
        const score = document.querySelector(".score")
        const match = document.querySelector(".match")
        const winner = document.querySelector(".winner")
        const playerHand = document.querySelector(".player-hand")
        const computerHand = document.querySelector(".computer-hand")
        playerHand.src = "image/Daş.png"
        computerHand.src = "image/Daş.png"
        winner.textContent = "Seçim Edin";
        finish.classList.add("FadeOut")
        score.classList.remove("FadeOut")
        match.classList.remove("FadeOut")
        playerScore = 0
        computerScore = 0
        updateScore();
        playerMainScore = 0
        computerMainScore = 0
        localStorage.setItem("playerMainScore" , playerMainScore)
        localStorage.setItem("computerMainScore" , computerMainScore)

        updateMainScore();
    })
    }
    
    ContinueRestart();
    playMatch();
}

game();





// const game = () => {
//     let playerScore = 0;
//     let computerScore = 0;
//     let playerMainScore = parseInt(localStorage.getItem("playerMainScore")) || 0;
//     let computerMainScore = parseInt(localStorage.getItem("computerMainScore")) || 0;
  
//     const playMatch = () => {
//       const options = document.querySelectorAll(".options button");
//       const playerHand = document.querySelector(".player-hand");
//       const computerHand = document.querySelector(".computer-hand");
  
//       const computerOptions = ["Daş", "Kağız", "Qayçı"];
  
//       options.forEach(option => {
//         option.addEventListener("click", function() {
//           const computerNumber = Math.floor(Math.random() * computerOptions.length);
//           const computerChoice = computerOptions[computerNumber];
  
//           playerHand.src = `image/${this.textContent}.png`;
//           computerHand.src = `image/${computerChoice}.png`;
//           updateText(this.textContent, computerChoice);
//         });
//       });
//     };
  
//     const updateText = (playerChoice, computerChoice) => {
//       const winner = document.querySelector(".winner");
//       if (playerChoice === computerChoice) {
//         winner.textContent = "Bərabər";
//         return;
//       }
//       if (playerChoice === "Daş") {
//         if (computerChoice === "Qayçı") {
//           winner.textContent = "Oyunçu Qazandı";
//           playerScore++;
//           updateScore();
//           return;
//         } else {
//           winner.textContent = "Kompüter Qazandı";
//           computerScore++;
//           updateScore();
//           return;
//         }
//       }
//       if (playerChoice === "Qayçı") {
//         if (computerChoice === "Kağız") {
//           winner.textContent = "Oyunçu Qazandı";
//           playerScore++;
//           updateScore();
//           return;
//         } else {
//           winner.textContent = "Kompüter Qazandı";
//           computerScore++;
//           updateScore();
//           return;
//         }
//       }
//       if (playerChoice === "Kağız") {
//         if (computerChoice === "Daş") {
//           winner.textContent = "Oyunçu Qazandı";
//           playerScore++;
//           updateScore();
//           return;
//         } else {
//           winner.textContent = "Kompüter Qazandı";
//           computerScore++;
//           updateScore();
//           return;
//         }
//       }
//     };
  
//     const updateScore = () => {
//       const plyScore = document.querySelector(".player-score p");
//       const cmpScore = document.querySelector(".computer-score p");
//       plyScore.textContent = playerScore;
//       cmpScore.textContent = computerScore;
//       checkScore();
//     };
  
//     const checkScore = () => {
//       if (playerScore === 5) {
//         playerMainScore++;
//         localStorage.setItem("playerMainScore", playerMainScore);
//         finish();
//         return;
//       }
//       if (computerScore === 5) {
//         computerMainScore++;
//         localStorage.setItem("computerMainScore", computerMainScore);
//         finish();
//         return;
//       }
//     };
  
//     const finish = () => {
//       const finishCard = document.querySelector(".card");
//       const score = document.querySelector(".score");
//       const match = document.querySelector(".match");
//       finishCard.classList.remove("FadeOut");
//       score.classList.add("FadeOut");
//       match.classList.add("FadeOut");
//       updateMainScore();
//       updateFinishText();
//     };
  
//     const updateMainScore = () => {
//       const plyMainScore = document.querySelector(".player-main-score p");
//       const cmpMainScore = document.querySelector(".computer-main-score p");
//       plyMainScore.textContent = playerMainScore;
//       cmpMainScore.textContent = computerMainScore;
//     };
  
//     const updateFinishText = () => {
//       const finishText = document.querySelector(".card h1");
//       if (playerScore === 5) {
//         finishText.textContent = "Oyunçu Qazandı";
//         return;
//       }
//       if (computerScore === 5) {
//         finishText.textContent = "Kompüter Qazandı";
//         return;
//       }
//     };
  
//     const ContinueRestart = () => {
//       const continueBtn = document.querySelector("#continue");
//       const restartBtn = document.querySelector("#restart");
  
//       continueBtn.addEventListener("click", function() {
//         const finishCard = document.querySelector(".card");
//         const score = document.querySelector(".score");
//         const match = document.querySelector(".match");
//         const winner = document.querySelector(".winner");
//         const playerHand = document.querySelector(".player-hand");
//         const computerHand = document.querySelector(".computer-hand");
//         playerHand.src = "image/Daş.png";
//         computerHand.src = "image/Daş.png";
//         winner.textContent = "Seçim Edin";
//         finishCard.classList.add("FadeOut");
//         score.classList.remove("FadeOut");
//         match.classList.remove("FadeOut");
//         playerScore = 0;
//         computerScore = 0;
//         updateScore();
//       });
  
//       restartBtn.addEventListener("click", function() {
//         const finishCard = document.querySelector(".card");
//         const score = document.querySelector(".score");
//         const match = document.querySelector(".match");
//         const winner = document.querySelector(".winner");
//         const playerHand = document.querySelector(".player-hand");
//         const computerHand = document.querySelector(".computer-hand");
//         playerHand.src = "image/Daş.png";
//         computerHand.src = "image/Daş.png";
//         winner.textContent = "Seçim Edin";
//         finishCard.classList.add("FadeOut");
//         score.classList.remove("FadeOut");
//         match.classList.remove("FadeOut");
//         playerScore = 0;
//         computerScore = 0;
//         updateScore();
//         playerMainScore = 0;
//         computerMainScore = 0;
//         localStorage.setItem("playerMainScore", playerMainScore);
//         localStorage.setItem("computerMainScore", computerMainScore);
//         updateMainScore();
//       });
//     };
  
//     ContinueRestart();
//     playMatch();
//   };
  
//   game();
  