// Play Music
function playMusic() {
  const playButton = document.querySelector(".music");
  const icon = document.querySelector("i");
  const audio = document.querySelector("audio");
  playButton.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      icon.setAttribute("class", "ti ti-player-play-filled");
    } else {
      audio.pause();
      icon.setAttribute("class", "ti ti-player-pause-filled");
    }
  });
}
playMusic();

// Rules 
function rules() {
  let choices1;
  let choices2;
  // Check in
  function checkIn(userScore, compScore) {
    if (choices1 == choices2) {
      alert("Seri");
    } else if (choices1 == "Rock" && choices2 == "Scissors" || choices1 == "Paper" && choices2 == "Rock" || choices1 == "Scissors" && choices2 == "Paper") {
      alert("Komputer Menang");
      compScore++
    } else {
      alert("Kamu Menang");
      userScore++
    }
    // Add score 
    function addScore() {
      let totalScoreUser = 0;
      let totalScoreComp = 0;
      const scoreComp = document.querySelector(".comp-score").children[0];
      const scoreUser = document.querySelector(".user-score").children[0];
      
      scoreComp.textContent = compScore;
      scoreUser.textContent = userScore;
    }
    addScore()
  }
  
  // selection the images
  const user = document.querySelector(".user-images img");
  const comp = document.querySelector(".comp-images img");
  
  // Computer choise
  function computerChoice() {
    const randomMath = Math.floor(Math.random() * 3);
    if (randomMath == 0) {
      comp.setAttribute("src", "/images/Batu.png");
      choices1 = "Rock"
    } else if (randomMath == 1) {
      comp.setAttribute("src", "/images/Gunting.png");
      choices1 = "Scissors"
    } else {
      comp.setAttribute("src", "/images/Kertas.png");
      choices1 = "Paper"
    }
  }
  
  // User choise
  function userChoice() {
    // array source
    const sourceImg = [
      "/images/Batu.png",
      "/images/Gunting.png",
      "/images/Kertas.png"
    ];
    const choice = document.querySelector(".choice");
    choice.addEventListener("click", (e) => {
      computerChoice();
      if (e.target.children[0] || e.target.className == "rock") {
        user.setAttribute("src", `${sourceImg[0]}`);
        choices2 = "Rock"
      } else if (e.target.children[1] || e.target.className == "scissors") {
        user.setAttribute("src", `${sourceImg[1]}`)
        choices2 = "Scissors";
      } else {
        user.setAttribute("src", `${sourceImg[2]}`)
        choices2 = "Paper";
      }
      checkIn(0, 0);
    });
  }
  userChoice();
  
}
rules();