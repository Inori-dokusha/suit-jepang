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
  let compScore = 0;
  let userScore = 0;

  // Popup
  // create new elements
  const div = document.createElement("div");
  const span = document.createElement("span");
  div.setAttribute("id", "pop-up");
  span.textContent = "Hasil";
  div.appendChild(span);
  document.body.appendChild(div);

  // Check in
  function checkIn() {
    if (choices1 == choices2) {
      span.textContent = "seri";
    } else if (
      (choices1 == "Rock" && choices2 == "Scissors") ||
      (choices1 == "Paper" && choices2 == "Rock") ||
      (choices1 == "Scissors" && choices2 == "Paper")
    ) {
      span.textContent = "Kamu Kalah";
      compScore++;
    } else {
      span.textContent = "Kamu Menang";
      userScore++;
    }

    // Add score
    function addScore() {
      const scoreComp = document.querySelector(".comp-score").children[0];
      const scoreUser = document.querySelector(".user-score").children[0];
      scoreComp.textContent = compScore;
      scoreUser.textContent = userScore;
    }
    addScore();
  }

  // selection the images
  const user = document.querySelector(".user-images img");
  const comp = document.querySelector(".comp-images img");

  // Computer choise
  function computerChoice() {
    const randomMath = Math.floor(Math.random() * 3);
    if (randomMath == 0) {
      comp.setAttribute("src", "/images/Batu.png");
      choices1 = "Rock";
    } else if (randomMath == 1) {
      comp.setAttribute("src", "/images/Gunting.png");
      choices1 = "Scissors";
    } else {
      comp.setAttribute("src", "/images/Kertas.png");
      choices1 = "Paper";
    }
  }

  // User choise
  function userChoice() {
    // array source
    const sourceImg = [
      "/images/Batu.png",
      "/images/Gunting.png",
      "/images/Kertas.png",
    ];
    const choice = document.querySelector(".choice");
    choice.addEventListener("click", (e) => {
      computerChoice();
      if (e.target.children[0] || e.target.className == "rock") {
        user.setAttribute("src", `${sourceImg[0]}`);
        choices2 = "Rock";
      } else if (e.target.children[1] || e.target.className == "scissors") {
        user.setAttribute("src", `${sourceImg[1]}`);
        choices2 = "Scissors";
      } else {
        user.setAttribute("src", `${sourceImg[2]}`);
        choices2 = "Paper";
      }
      div.style.transform = "translateY(0px)";
      div.style.transition = "300ms";
      setTimeout(() => {
        div.style.transform = "translateY(-70px)";
      }, 700);
      checkIn();
    });
  }
  userChoice();
}
rules();
